# 🔐 NextAuth Authentication Template

This template provides **NextAuth.js** authentication setup with three providers:

* **Magic Link (Email Login)**
* **Google OAuth Login**
* **GitHub OAuth Login**

It includes ready-to-use configuration for MongoDB, NextAuth, and Nodemailer.

---

## ⚙️ Environment Setup

Before running the project, create a `.env.local` file in the root directory and add the following environment variables:

```bash
# ------------------------------
# MongoDB Connection
# ------------------------------
MONGODB_URI="your_mongodb_connection_string"

# ------------------------------
# NextAuth Configuration
# ------------------------------
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_generated_secret_key"

# ------------------------------
# NextAuth Providers
# (Magic Link, Google, GitHub)
# ------------------------------

# Magic Link Email Provider
NODEMAILER_EMAIL_ID="your_email@example.com"
NODEMAILER_EMAIL_PASSWORD="your_app_password"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587

# Google Provider
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# GitHub Provider
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
```

---

## 🔧 How to Get These Values

### 🗄️ MongoDB

* Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
* Create a new cluster
* Copy your **connection string** from the “Connect” section
* Replace `<password>` and `<dbname>` with your actual values

### 🔑 NextAuth Secret

Generate a strong secret using:

```bash
openssl rand -base64 32
```

### 🌐 Google OAuth

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **OAuth consent screen** and **Credentials**
4. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI
5. Copy your **Client ID** and **Client Secret**

### 🐙 GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new **OAuth App**
3. Set callback URL:

   ```
   http://localhost:3000/api/auth/callback/github
   ```
4. Copy the **Client ID** and **Client Secret**

### 📧 Magic Link (Email Provider)

1. Enable **2-Step Verification** in your Gmail account
2. Generate an **App Password** for “Mail”
3. Use that app password in `NODEMAILER_EMAIL_PASSWORD`

---

## 🚀 Run the Project

Once `.env.local` is set up, run your app:

```bash
npm install
npm run dev
```

Your app will be live at [http://localhost:3000](http://localhost:3000)

---

✅ **Ready to Go:** You now have a working NextAuth setup with Google, GitHub, and Magic Link authentication.
