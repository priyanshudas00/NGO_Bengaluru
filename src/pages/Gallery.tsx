import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import {
  Heart,
  MessageCircle,
  Share,
  Send,
  User,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Calendar,
  Eye,
  Loader2,
  ExternalLink
} from "lucide-react";
import { supabase, Post, Comment } from "@/lib/supabase";

const Gallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number>(0);
  const [newComment, setNewComment] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [comments, setComments] = useState<{[postId: string]: Comment[]}>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiking, setIsLiking] = useState<string | null>(null);
  const [isCommenting, setIsCommenting] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const PAGE_SIZE = 9;

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  const fetchPosts = useCallback(async () => {
    try {
      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data: postsData, error, count } = await supabase
        .from('posts')
        .select('*', { count: 'exact' })
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      setPosts(prev => page === 1 ? postsData || [] : [...prev, ...(postsData || [])]);
      setHasMore((count || 0) > page * PAGE_SIZE);

      // Fetch comments for new posts only
      const newPosts = postsData || [];
      const commentsData: {[postId: string]: Comment[]} = {};
      
      await Promise.all(
        newPosts.map(async (post) => {
          const { data: postComments } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', post.id)
            .order('created_at', { ascending: true })
            .limit(50);

          commentsData[post.id] = postComments || [];
        })
      );

      setComments(prev => ({ ...prev, ...commentsData }));

      // In real implementation, fetch user's likes
      const { data: userLikesData } = await supabase
        .from('likes')
        .select('post_id')
        .eq('user_id', 'mock-user-id');

      const userLikes = new Set(userLikesData?.map(like => like.post_id) || []);
      setLikedPosts(userLikes);

    } catch (error) {
      console.error('Failed to fetch posts:', error);
      toast({
        title: "Error",
        description: "Failed to load posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [page, toast]);

  const handleLike = async (postId: string) => {
    if (isLiking) return;
    
    setIsLiking(postId);
    try {
      const isLiked = likedPosts.has(postId);
      const post = posts.find(p => p.id === postId);

      if (!post) return;

      if (isLiked) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', 'mock-user-id');

        if (error) throw error;

        setLikedPosts(prev => new Set([...prev].filter(id => id !== postId)));

        setPosts(prev => prev.map(p =>
          p.id === postId ? { ...p, likes_count: Math.max(0, (p.likes_count || 1) - 1) } : p
        ));

        toast({
          title: "Like removed",
          description: "You've unliked this post.",
        });

      } else {
        const { error } = await supabase
          .from('likes')
          .insert([{
            post_id: postId,
            user_id: 'mock-user-id'
          }]);

        if (error) throw error;

        setLikedPosts(prev => new Set([...prev, postId]));

        setPosts(prev => prev.map(p =>
          p.id === postId ? { ...p, likes_count: (p.likes_count || 0) + 1 } : p
        ));

        toast({
          title: "Post liked",
          description: "You've liked this post!",
        });
      }

      // Update selected post if open
      if (selectedPost?.id === postId) {
        setSelectedPost(prev => prev ? {
          ...prev,
          likes_count: isLiked ? Math.max(0, (prev.likes_count || 1) - 1) : (prev.likes_count || 0) + 1
        } : null);
      }

    } catch (error) {
      console.error('Failed to toggle like:', error);
      toast({
        title: "Error",
        description: "Failed to update like. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLiking(null);
    }
  };

  const handleComment = async (postId: string) => {
    if (!newComment.trim() || isCommenting) return;

    setIsCommenting(postId);
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{
          post_id: postId,
          user_id: 'mock-user-id',
          content: newComment.trim(),
          user_name: 'Anonymous User'
        }])
        .select();

      if (error) throw error;

      // Update local state
      const newCommentData = data?.[0];
      if (newCommentData) {
        setComments(prev => ({
          ...prev,
          [postId]: [...(prev[postId] || []), newCommentData]
        }));

        setPosts(prev => prev.map(p =>
          p.id === postId ? { ...p, comments_count: (p.comments_count || 0) + 1 } : p
        ));

        if (selectedPost?.id === postId) {
          setSelectedPost(prev => prev ? {
            ...prev,
            comments_count: (prev.comments_count || 0) + 1
          } : null);
        }
      }

      setNewComment("");
      
      toast({
        title: "Comment added",
        description: "Your comment has been posted.",
      });

    } catch (error) {
      console.error('Failed to add comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCommenting(null);
    }
  };

  const handleShare = async (post: Post) => {
    try {
      const shareData = {
        title: post.title,
        text: post.caption || post.title,
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        
        // Update share count
        setPosts(prev => prev.map(p =>
          p.id === post.id ? { ...p, shares_count: (p.shares_count || 0) + 1 } : p
        ));
        
        toast({
          title: "Shared successfully",
          description: "Post shared with others.",
        });
      } else {
        await navigator.clipboard.writeText(`${post.title}\n${post.caption || ''}\n${window.location.href}`);
        
        toast({
          title: "Link copied",
          description: "Post link copied to clipboard.",
        });
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Share failed:', error);
        toast({
          title: "Share failed",
          description: "Could not share the post. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const openModal = (post: Post, index: number) => {
    setSelectedPost(post);
    setSelectedPostIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const navigatePost = (direction: 'prev' | 'next') => {
    if (!selectedPost || posts.length <= 1) return;

    const newIndex = direction === 'next'
      ? (selectedPostIndex + 1) % posts.length
      : (selectedPostIndex - 1 + posts.length) % posts.length;

    setSelectedPost(posts[newIndex]);
    setSelectedPostIndex(newIndex);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isModalOpen || !selectedPost) return;

    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigatePost('prev');
    if (e.key === 'ArrowRight') navigatePost('next');
  }, [isModalOpen, selectedPost]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (isLoading && page === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto mb-4"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary/40 animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <p className="text-gray-600 font-medium">Loading beautiful moments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Gallery Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                Featured Stories
              </h2>
              <p className="text-gray-600 text-sm max-w-lg mx-auto">
                Scroll to discover more inspiring moments from our community
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="p-4 sm:p-6">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 text-sm">Check back soon for inspiring stories and moments!</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {posts.map((post, index) => (
                    <Card
                      key={post.id}
                      className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={post.image_url || '/placeholder.svg'}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <Button
                            onClick={() => openModal(post, index)}
                            className="bg-white/90 hover:bg-white text-gray-900 rounded-full px-4 py-2 shadow-lg"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>

                        {/* Stats */}
                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 text-white text-xs">
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>{post.likes_count || 0}</span>
                          </div>
                          <div className="w-px h-3 bg-white/30"></div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{post.comments_count || 0}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <img
                                src="/images/main logo.png"
                                alt="Asangoham Foundation"
                                className="w-6 h-6 rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 text-sm">Asangoham Foundation</h3>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openModal(post, index)}
                            className="p-1 h-7 w-7"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                        
                        {post.caption && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.caption}</p>
                        )}

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleLike(post.id)}
                              disabled={isLiking === post.id}
                              className={`p-1.5 h-8 w-8 rounded-full transition-colors ${
                                likedPosts.has(post.id)
                                  ? "text-red-500 hover:text-red-600 bg-red-50"
                                  : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                              }`}
                            >
                              {isLiking === post.id ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Heart className={`w-3.5 h-3.5 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openModal(post, index)}
                              className="p-1.5 h-8 w-8 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleShare(post)}
                              className="p-1.5 h-8 w-8 rounded-full text-gray-600 hover:text-green-500 hover:bg-green-50"
                            >
                              <Share className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Infinite scroll loader */}
                {hasMore && (
                  <div ref={observerRef} className="py-8 text-center">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Detailed View */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-6xl w-full h-[90vh] sm:h-[85vh] p-0 bg-black border-0 overflow-hidden">
          {selectedPost && (
            <div className="relative w-full h-full flex flex-col lg:flex-row">
              {/* Close Button */}
              <Button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Navigation Buttons */}
              {posts.length > 1 && (
                <>
                  <Button
                    onClick={() => navigatePost('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2 sm:p-3 hidden lg:block"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                  <Button
                    onClick={() => navigatePost('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2 sm:p-3 hidden lg:block"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </>
              )}

              {/* Image Section */}
              <div className="flex-1 relative min-h-[40vh] lg:min-h-0">
                <img
                  src={selectedPost.image_url || '/placeholder.svg'}
                  alt={selectedPost.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Mobile Navigation */}
                {posts.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 lg:hidden">
                    <Button
                      onClick={() => navigatePost('prev')}
                      className="bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => navigatePost('next')}
                      className="bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-96 bg-white flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <img
                        src="/images/main logo.png"
                        alt="Asangoham Foundation"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Asangoham Foundation</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(selectedPost.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="font-bold text-xl text-gray-900 mb-3">{selectedPost.title}</h2>

                  {selectedPost.caption && (
                    <div className="prose prose-sm max-w-none mb-6">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedPost.caption}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                    <Button
                      onClick={() => handleLike(selectedPost.id)}
                      disabled={isLiking === selectedPost.id}
                      variant="ghost"
                      className={`flex items-center gap-2 ${
                        likedPosts.has(selectedPost.id)
                          ? "text-red-500 hover:text-red-600"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      {isLiking === selectedPost.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Heart className={`w-5 h-5 ${likedPosts.has(selectedPost.id) ? "fill-current" : ""}`} />
                      )}
                      <span className="font-medium">{selectedPost.likes_count || 0}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{selectedPost.comments_count || 0}</span>
                    </Button>
                    <Button
                      onClick={() => handleShare(selectedPost)}
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                    >
                      <Share className="w-5 h-5" />
                      <span className="font-medium">{selectedPost.shares_count || 0}</span>
                    </Button>
                  </div>

                  {/* Comments */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Comments</h4>

                    {comments[selectedPost.id]?.length > 0 ? (
                      <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
                        {comments[selectedPost.id].map((comment) => (
                          <div key={comment.id} className="flex gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="bg-gray-100 rounded-lg px-3 py-2">
                                <p className="text-sm font-semibold text-gray-900">{comment.user_name}</p>
                                <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(comment.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
                    )}

                    {/* Add Comment */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleComment(selectedPost.id)}
                          className="flex-1"
                          disabled={isCommenting === selectedPost.id}
                        />
                        <Button
                          onClick={() => handleComment(selectedPost.id)}
                          disabled={!newComment.trim() || isCommenting === selectedPost.id}
                          className="px-4"
                        >
                          {isCommenting === selectedPost.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;