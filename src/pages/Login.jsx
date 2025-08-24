// src/pages/Login.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { isAuthenticated, user, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="min-h-[40vh] flex items-center justify-center">Loading…</div>;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold text-center">Account</h1>

        {isAuthenticated ? (
          <>
            <div className="mt-6 text-center">
              <img
                src={user?.picture}
                alt={user?.name || 'User avatar'}
                className="mx-auto h-16 w-16 rounded-full"
              />
              <p className="mt-2 font-medium">{user?.name}</p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="rounded-md bg-accent px-5 py-2 font-semibold text-dark hover:brightness-95"
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => loginWithRedirect()}
              className="rounded-md bg-accent px-5 py-2 font-semibold text-dark hover:brightness-95"
            >
              Log in / Sign up
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
