import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  MessageCircle,
  Share,
  Send,
  MoreHorizontal,
  User,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Calendar,
  Eye
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

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data: postsData, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPosts(postsData || []);

      // Fetch comments for each post
      const commentsData: {[postId: string]: Comment[]} = {};
      for (const post of postsData || []) {
        const { data: postComments } = await supabase
          .from('comments')
          .select('*')
          .eq('post_id', post.id)
          .order('created_at', { ascending: true });

        commentsData[post.id] = postComments || [];
      }
      setComments(commentsData);

      // Check user's likes (mock for now - would use auth)
      const userLikes = new Set<string>();
      // In real implementation, fetch user's likes from database
      setLikedPosts(userLikes);

    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      const isLiked = likedPosts.has(postId);

      if (isLiked) {
        // Remove like
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', 'mock-user-id'); // Replace with actual user ID

        if (error) throw error;

        setLikedPosts(prev => {
          const newSet = new Set(prev);
          newSet.delete(postId);
          return newSet;
        });

        // Update post likes count
        await supabase
          .from('posts')
          .update({ likes_count: (posts.find(p => p.id === postId)?.likes_count || 0) - 1 })
          .eq('id', postId);

      } else {
        // Add like
        const { error } = await supabase
          .from('likes')
          .insert([{
            post_id: postId,
            user_id: 'mock-user-id' // Replace with actual user ID
          }]);

        if (error) throw error;

        setLikedPosts(prev => new Set([...prev, postId]));

        // Update post likes count
        await supabase
          .from('posts')
          .update({ likes_count: (posts.find(p => p.id === postId)?.likes_count || 0) + 1 })
          .eq('id', postId);
      }

      // Refresh posts
      fetchPosts();
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  };

  const handleComment = async (postId: string) => {
    if (!newComment.trim()) return;

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{
          post_id: postId,
          user_id: 'mock-user-id', // Replace with actual user ID
          content: newComment,
          user_name: 'Anonymous User' // Replace with actual user name
        }])
        .select();

      if (error) throw error;

      // Update post comments count
      await supabase
        .from('posts')
        .update({ comments_count: (posts.find(p => p.id === postId)?.comments_count || 0) + 1 })
        .eq('id', postId);

      setNewComment("");
      fetchPosts(); // Refresh data
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  const handleShare = (post: Post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.caption,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${post.title}\n${post.caption}\n${window.location.href}`);
      // You could show a toast notification here instead of alert
    }

    // Update shares count (optional - could track in database)
    setPosts(prevPosts =>
      prevPosts.map(p =>
        p.id === post.id ? { ...p, shares_count: (p.shares_count || 0) + 1 } : p
      )
    );
  };

  const openModal = (post: Post, index: number) => {
    setSelectedPost(post);
    setSelectedPostIndex(index);
    setIsModalOpen(true);
  };

  const navigatePost = (direction: 'prev' | 'next') => {
    if (!selectedPost) return;

    const newIndex = direction === 'next'
      ? (selectedPostIndex + 1) % posts.length
      : (selectedPostIndex - 1 + posts.length) % posts.length;

    setSelectedPost(posts[newIndex]);
    setSelectedPostIndex(newIndex);
  };

  if (isLoading) {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Community Gallery
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the stories, moments, and transformations that define our journey of hope and change.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600">Check back soon for inspiring stories and moments!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={post.image_url || '/placeholder.svg'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      onClick={() => openModal(post, index)}
                      className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-3">
                      <div className="flex items-center gap-1 text-white text-sm">
                        <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        <span>{post.likes_count || 0}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments_count || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/main logo.png"
                        alt="Asangoham Foundation"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">Asangoham Foundation</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{post.title}</h4>

                  {post.caption && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">{post.caption}</p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className={`p-2 h-8 w-8 rounded-full transition-colors ${
                          likedPosts.has(post.id)
                            ? "text-red-500 hover:text-red-600 bg-red-50"
                            : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openModal(post, index)}
                        className="p-2 h-8 w-8 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(post)}
                        className="p-2 h-8 w-8 rounded-full text-gray-600 hover:text-green-500 hover:bg-green-50"
                      >
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openModal(post, index)}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Detailed View */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/95 border-0">
          {selectedPost && (
            <div className="relative w-full h-full flex">
              {/* Close Button */}
              <Button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Navigation Buttons */}
              {posts.length > 1 && (
                <>
                  <Button
                    onClick={() => navigatePost('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-3"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={() => navigatePost('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-3"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image Section */}
              <div className="flex-1 relative">
                <img
                  src={selectedPost.image_url || '/placeholder.svg'}
                  alt={selectedPost.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="w-96 bg-white flex flex-col">
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
                    <div>
                      <h3 className="font-semibold text-gray-900">Asangoham Foundation</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(selectedPost.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="font-bold text-xl text-gray-900 mb-2">{selectedPost.title}</h2>

                  {selectedPost.caption && (
                    <p className="text-gray-700 mb-4 leading-relaxed">{selectedPost.caption}</p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mb-6">
                    <Button
                      onClick={() => handleLike(selectedPost.id)}
                      variant="ghost"
                      className={`flex items-center gap-2 ${
                        likedPosts.has(selectedPost.id)
                          ? "text-red-500 hover:text-red-600"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedPosts.has(selectedPost.id) ? "fill-current" : ""}`} />
                      <span>{selectedPost.likes_count || 0}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{selectedPost.comments_count || 0}</span>
                    </Button>
                    <Button
                      onClick={() => handleShare(selectedPost)}
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                    >
                      <Share className="w-5 h-5" />
                      <span>{selectedPost.shares_count || 0}</span>
                    </Button>
                  </div>

                  {/* Comments */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Comments</h4>

                    {comments[selectedPost.id]?.length > 0 ? (
                      <div className="space-y-3 max-h-60 overflow-y-auto">
                        {comments[selectedPost.id].map((comment) => (
                          <div key={comment.id} className="flex gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="bg-gray-100 rounded-lg px-3 py-2">
                                <p className="text-sm font-semibold text-gray-900">{comment.user_name}</p>
                                <p className="text-sm text-gray-700">{comment.content}</p>
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
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <Input
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleComment(selectedPost.id)}
                        className="flex-1"
                      />
                      <Button
                        onClick={() => handleComment(selectedPost.id)}
                        disabled={!newComment.trim()}
                        className="px-4"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
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