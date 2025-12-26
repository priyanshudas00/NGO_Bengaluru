import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  MessageCircle,
  Share,
  Send,
  MoreHorizontal,
  User
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  shares: number;
  createdAt: string;
  author: {
    name: string;
    avatar?: string;
  };
}

interface Comment {
  id: string;
  user: string;
  content: string;
  createdAt: string;
}

const Gallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  // Mock data - will be replaced with Supabase
  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: "1",
        title: "New School Opening in Sundarban",
        content: "We're excited to announce the opening of our new community school in the Sundarban region. This milestone brings quality education closer to 100+ children who previously had limited access to learning facilities.",
        image: "/images/1.jpeg",
        caption: "Education is the foundation of a brighter future! 📚✨",
        likes: 45,
        comments: [
          { id: "1", user: "Rahul Sharma", content: "This is amazing work!", createdAt: "2025-01-15T10:30:00Z" },
          { id: "2", user: "Priya Patel", content: "So proud of the team!", createdAt: "2025-01-15T11:15:00Z" }
        ],
        shares: 8,
        createdAt: "2025-01-15T09:00:00Z",
        author: { name: "Asangoham Foundation", avatar: "/images/main logo.png" }
      },
      {
        id: "2",
        title: "Food Distribution Drive",
        content: "Successfully distributed nutritious meals to 200 families affected by recent floods in the region. Your support made this possible!",
        image: "/images/2.jpeg",
        caption: "No one should sleep hungry. Together, we're making a difference! 🍲❤️",
        likes: 67,
        comments: [
          { id: "3", user: "Amit Kumar", content: "Thank you for helping our community!", createdAt: "2025-01-10T14:20:00Z" }
        ],
        shares: 15,
        createdAt: "2025-01-10T12:00:00Z",
        author: { name: "Asangoham Foundation", avatar: "/images/main logo.png" }
      },
      {
        id: "3",
        title: "Women's Empowerment Workshop",
        content: "Conducted a successful skill training workshop for 25 women in the village. They learned tailoring, financial literacy, and entrepreneurship skills.",
        image: "/images/3.jpeg",
        caption: "Empowering women to build stronger communities! 💪👩‍🦱",
        likes: 52,
        comments: [],
        shares: 12,
        createdAt: "2025-01-08T16:00:00Z",
        author: { name: "Asangoham Foundation", avatar: "/images/main logo.png" }
      }
    ];
    setPosts(mockPosts);
  }, []);

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId ? { ...post, likes: post.likes - 1 } : post
          )
        );
      } else {
        newSet.add(postId);
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
          )
        );
      }
      return newSet;
    });
  };

  const handleComment = (postId: string) => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: "Anonymous User", // In real app, get from auth
      content: newComment,
      createdAt: new Date().toISOString()
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, comment]
            }
          : post
      )
    );
    setNewComment("");
  };

  const handleShare = (post: Post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.caption,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${post.title}\n${post.caption}\n${window.location.href}`);
      alert("Link copied to clipboard!");
    }

    setPosts(prevPosts =>
      prevPosts.map(p =>
        p.id === post.id ? { ...p, shares: p.shares + 1 } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Gallery</h1>
          <p className="text-gray-600">Stories, updates, and moments from our journey</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              {/* Post Header */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {post.author.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Post Content */}
              <CardContent className="p-4">
                {/* Action Buttons */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={likedPosts.has(post.id) ? "text-red-500" : ""}
                    >
                      <Heart className={`w-5 h-5 mr-1 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                      {post.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedPost(selectedPost?.id === post.id ? null : post)}
                    >
                      <MessageCircle className="w-5 h-5 mr-1" />
                      {post.comments.length}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(post)}
                    >
                      <Share className="w-5 h-5 mr-1" />
                      {post.shares}
                    </Button>
                  </div>
                </div>

                {/* Caption */}
                <div className="mb-4">
                  <p className="text-gray-900">
                    <span className="font-semibold mr-2">{post.author.name}</span>
                    {post.caption}
                  </p>
                </div>

                {/* Comments Section */}
                {selectedPost?.id === post.id && (
                  <div className="border-t pt-4">
                    <div className="space-y-3 mb-4">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg px-3 py-2">
                              <p className="text-sm font-semibold text-gray-900">{comment.user}</p>
                              <p className="text-sm text-gray-700">{comment.content}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment */}
                    <div className="flex space-x-3">
                      <Input
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                        className="flex-1"
                      />
                      <Button
                        onClick={() => handleComment(post.id)}
                        disabled={!newComment.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Post Details */}
                <div className="text-sm text-gray-500 mt-2">
                  View all {post.comments.length} comments
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;