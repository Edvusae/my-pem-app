'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

// components/SessionProvider.tsx
export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) 
// components/SessionProvider.tsx
{
  return <NextAuthSessionProvider>
    {children}
    </NextAuthSessionProvider>;
}