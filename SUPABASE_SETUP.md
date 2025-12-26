# Supabase Database Setup Instructions

## 🚀 Setting up your Supabase Database

Your application is trying to connect to Supabase but the required database tables don't exist yet. Follow these steps:

### Step 1: Access Supabase SQL Editor
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `mfiptziulgdvkbcenrix`
3. Click on "SQL Editor" in the left sidebar

### Step 2: Run the Schema SQL
1. Copy the entire contents of `supabase-schema.sql`
2. Paste it into the SQL Editor
3. Click "Run" to execute the SQL

### Step 3: Verify Setup
After running the SQL, you should see:
- ✅ Tables created: `users`, `posts`, `comments`, `likes`
- ✅ Storage buckets created: `posts`, `avatars`, `banners`
- ✅ Row Level Security policies configured
- ✅ Indexes created for performance

### Step 4: Test the Application
Once the database is set up:
1. Restart your development server: `npm run dev`
2. The gallery and admin panel should now work properly
3. You can start creating posts and interacting with the application

## 📋 What's Included

### Tables:
- **users**: User profiles and authentication
- **posts**: Blog posts and gallery items
- **comments**: User comments on posts
- **likes**: User likes on posts

### Storage Buckets:
- **posts**: Images for gallery posts
- **avatars**: User profile pictures
- **banners**: Banner images for the site

### Security:
- Row Level Security (RLS) enabled
- Proper authentication checks
- Secure file upload policies

## 🔧 Troubleshooting

If you still see errors after running the SQL:
1. Check that all tables were created in your Supabase dashboard
2. Verify the storage buckets exist
3. Make sure your `.env` file has the correct API key
4. Try refreshing your browser

## 📞 Need Help?

If you encounter any issues, check the Supabase logs in your dashboard or contact support.