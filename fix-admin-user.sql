-- Fix Admin User Profile Issue
-- Run this SQL in your Supabase SQL Editor

-- First, check if the admin user exists in auth.users
-- Then create or update the profile in public.users

-- Insert or update admin user profile
INSERT INTO public.users (id, email, full_name, role, created_at, updated_at)
SELECT
    au.id,
    au.email,
    COALESCE(au.raw_user_meta_data->>'full_name', 'Admin User'),
    'admin',
    au.created_at,
    NOW()
FROM auth.users au
WHERE au.email = 'admin@asangoham.org'
ON CONFLICT (id) DO UPDATE SET
    role = 'admin',
    updated_at = NOW();

-- Alternative: If you know the user ID, you can directly insert:
-- Replace 'user-id-here' with the actual user ID from Supabase Dashboard
/*
INSERT INTO public.users (id, email, full_name, role, created_at, updated_at)
VALUES (
    'user-id-here', -- Replace with actual user ID
    'admin@asangoham.org',
    'Admin User',
    'admin',
    NOW(),
    NOW()
) ON CONFLICT (id) DO UPDATE SET
    role = 'admin',
    updated_at = NOW();
*/

-- Create a function to automatically create user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, role, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        'user',
        NEW.created_at,
        NOW()
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user profiles
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Verify the admin user exists
SELECT
    au.email,
    au.id as auth_id,
    pu.id as profile_id,
    pu.role
FROM auth.users au
LEFT JOIN public.users pu ON au.id = pu.id
WHERE au.email = 'admin@asangoham.org';