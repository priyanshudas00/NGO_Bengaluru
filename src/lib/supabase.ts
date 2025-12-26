import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Post {
  id: string
  title: string
  content: string
  image_url: string
  caption: string
  status: 'draft' | 'published'
  likes_count: number
  comments_count: number
  shares_count: number
  created_at: string
  updated_at: string
  author_id: string
}

export interface Comment {
  id: string
  post_id: string
  user_id: string
  content: string
  created_at: string
}

export interface Like {
  id: string
  post_id: string
  user_id: string
  created_at: string
}

export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: 'admin' | 'user'
  created_at: string
}

// Storage bucket names
export const BUCKETS = {
  POSTS: 'posts',
  AVATARS: 'avatars',
  BANNERS: 'banners'
}

// Helper functions
export const uploadFile = async (bucket: string, path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file)

  if (error) throw error
  return data
}

export const getPublicUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

export const deleteFile = async (bucket: string, path: string) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])

  if (error) throw error
}