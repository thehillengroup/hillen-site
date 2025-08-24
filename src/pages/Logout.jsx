import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Logout() {
  const { logout } = useAuth0();

  useEffect(() => {
    // Redirect back to site root after clearing the Auth0 session + tokens
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, [logout]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg">Signing you out...</p>
      </div>
    </section>
  );
}
