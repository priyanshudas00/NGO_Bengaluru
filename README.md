# Asangoham Foundation Website

A modern, dynamic website for the Asangoham Foundation built with React, TypeScript, and Supabase.

## 🚀 Features

- **Admin Dashboard**: Complete content management system with authentication
- **Instagram-style Gallery**: Interactive photo gallery with likes, comments, and shares
- **Responsive Design**: Mobile-first design with Tailwind CSS and shadcn/ui
- **Real-time Updates**: Live data synchronization with Supabase
- **Modern UI**: Clean, professional interface for NGO operations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (Database + Auth + Storage)
- **Icons**: Lucide React
- **Build**: Vite

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account and project

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanshudas00/NGO_Bengaluru.git
   cd NGO_Bengaluru
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
   ```

4. **Set up Supabase database**
   - Run the SQL scripts in `supabase-schema.sql` in your Supabase SQL Editor
   - Execute `fix-admin-user.sql` to set up admin user profiles

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Environment Variables for Production

**Important**: The `.env` file is gitignored for security. For production deployment, set these environment variables:

#### Vercel
```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

#### Netlify
Add to Site Settings > Environment Variables:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

#### GitHub Pages / Static Hosting
Set environment variables in your deployment pipeline or use build-time variables.

### Deploy Commands

```bash
# Build
npm run build

# Preview build locally
npm run preview
```

## 🔧 Database Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project

2. **Run Database Schema**
   - Open Supabase Dashboard > SQL Editor
   - Run the contents of `supabase-schema.sql`

3. **Set up Storage**
   - Create a bucket named `posts` in Storage
   - Set bucket to public

4. **Configure Authentication**
   - Enable email authentication in Authentication > Settings
   - Run `fix-admin-user.sql` to create admin user profile trigger

## 👤 Admin Setup

1. **Create Admin User**
   - Run `create-admin-user.sql` in Supabase SQL Editor
   - Or manually create user in Supabase Auth dashboard

2. **Login Credentials**
   - Email: `admin@asangoham.org`
   - Password: `admin123456` (change after first login)

3. **Access Admin Panel**
   - Navigate to `/admin` route
   - Login with admin credentials

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CreatePost.tsx  # Post creation modal
│   ├── AdminSetup.tsx  # Admin user setup
│   └── ...
├── pages/              # Page components
│   ├── Admin.tsx       # Admin dashboard
│   ├── Gallery.tsx     # Photo gallery
│   └── ...
├── lib/
│   └── supabase.ts     # Supabase client & types
└── ...
```

## 🔒 Security Notes

- Never commit `.env` files with real credentials
- Use environment variables for all sensitive data
- Regularly rotate API keys
- Enable Row Level Security (RLS) in Supabase

## 🐛 Troubleshooting

### "Invalid supabaseUrl" Error
- Ensure `VITE_SUPABASE_URL` is set correctly
- URL should be in format: `https://your-project-id.supabase.co`
- Check that environment variables are loaded in production

### Admin Login Issues
- Run `fix-admin-user.sql` in Supabase SQL Editor
- Ensure user profile exists in `users` table
- Check Supabase Auth settings

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Update browserslist: `npx update-browserslist-db@latest`

## 📄 License

This project is part of the Asangoham Foundation's digital presence.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 👨‍💻 Developer

This project was built by **Priyanshu Raj** ([priyanshudas00](https://github.com/priyanshudas00))

- **LinkedIn**: [priyanshudas00](https://www.linkedin.com/in/priyanshudas00)
- **GitHub**: [priyanshudas00](https://github.com/priyanshudas00)

## 📄 License

This project is part of the Asangoham Foundation's digital presence.
