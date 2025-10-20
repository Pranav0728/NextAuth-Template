"use client";

import { useSession, signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow p-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Hello, {session?.user?.name || session?.user?.email || "User"}
        </h1>
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}