'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

// ... existing code ...

export default function Page() {
  const { data: session, status } = useSession()
  const [showDebug, setShowDebug] = useState(false)

  const isAuth = status === 'authenticated'
  const user = session?.user

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black p-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
              NextAuth Authentication Template
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Magic Link (Email), Google OAuth, GitHub OAuth
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm ${
              isAuth
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-white'
            }`}
          >
            {isAuth ? 'Authenticated' : 'Guest'}
          </span>
        </header>

        {/* Hello user + avatar */}
        <section className="rounded-2xl bg-white dark:bg-slate-800 shadow p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.image} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-slate-500 dark:text-slate-300">
                🙂
              </div>
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-medium text-slate-900 dark:text-white">
              Hello, {user?.name || user?.email || 'User'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Explore the auth flows and review your session below.
            </p>
          </div>
          <div className="flex gap-2">
            {isAuth ? (
              <button
                onClick={() => signOut({ callbackUrl: '/signin' })}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Sign out
              </button>
            ) : (
              <a
                href="/(auth)/signin"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Go to Sign In
              </a>
            )}
          </div>
        </section>

          {/* Providers Overview */}
          <section className="rounded-2xl bg-white dark:bg-slate-800 shadow p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Providers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h4 className="font-medium text-slate-900 dark:text-white">Magic Link</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Email-based login</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h4 className="font-medium text-slate-900 dark:text-white">Google OAuth</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">One-click sign-in</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h4 className="font-medium text-slate-900 dark:text-white">GitHub OAuth</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Dev-friendly login</p>
              </div>
            </div>
          </section>


        {/* Session Debug + Links */}
          <section className="rounded-2xl bg-white dark:bg-slate-800 shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Session</h3>
              <button
                onClick={() => setShowDebug((s) => !s)}
                className="text-sm px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white"
              >
                {showDebug ? 'Hide JSON' : 'Show JSON'}
              </button>
            </div>
            {showDebug ? (
              <pre className="max-h-[40vh] overflow-auto rounded-md border p-4 bg-slate-100 dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100">
                {JSON.stringify(session || { status }, null, 2)}
              </pre>
            ) : (
              <p className="text-slate-600 dark:text-slate-300">
                {isAuth
                  ? 'You are signed in. Use the buttons above to sign out or try another provider.'
                  : 'You are browsing as a guest. Head to Sign In to try magic link or OAuth.'}
              </p>
            )}
          </section>

        
      </div>
    </main>
  )
}

// ... existing code ...