import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Development fallback - only use in development, never in production
const isDevelopment = import.meta.env.DEV

if (!supabaseUrl || supabaseUrl.includes('your-project-id')) {
  if (isDevelopment) {
    console.warn('⚠️  Supabase URL not configured. Using development fallback.')
    console.warn('Please set VITE_SUPABASE_URL in your .env file for full functionality.')
  } else {
    throw new Error('Supabase URL not configured. Please set VITE_SUPABASE_URL environment variable.')
  }
}

if (!supabaseAnonKey || supabaseAnonKey.includes('your_actual_anon_key')) {
  if (isDevelopment) {
    console.warn('⚠️  Supabase anon key not configured. Using development fallback.')
    console.warn('Please set VITE_SUPABASE_ANON_KEY in your .env file for full functionality.')
  } else {
    throw new Error('Supabase anon key not configured. Please set VITE_SUPABASE_ANON_KEY environment variable.')
  }
}

// Create client with fallbacks for development
const finalUrl = supabaseUrl || 'https://placeholder.supabase.co'
const finalKey = supabaseAnonKey || 'placeholder-key'

export const supabase = createClient(finalUrl, finalKey)

// Database Types
export interface Post {
  id: string
  title: string
  content: string
  image_url: string // Keep for backward compatibility
  image_urls?: string[] // New field for multiple images
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