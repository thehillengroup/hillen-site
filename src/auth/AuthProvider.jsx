// src/auth/AuthProvider.jsx
import React, { useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export default function AuthProvider({ children }) {
  const domain   = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE; // optional

  useEffect(() => {
    if (!domain || !clientId) {
      // eslint-disable-next-line no-console
      console.error(
        '[Auth0] Missing env vars. Add REACT_APP_AUTH0_DOMAIN and REACT_APP_AUTH0_CLIENT_ID ' +
        'to .env.local (for dev) and .env.deploy.local (for prod).'
      );
    }
  }, [domain, clientId]);

  if (!domain || !clientId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-red-700">
        Auth configuration missing. Check <code>.env.local</code>.
      </div>
    );
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + '/home',
     //   ...(audience ? { audience } : {}),
      }}
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}
