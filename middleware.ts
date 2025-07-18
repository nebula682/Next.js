// middleware.ts

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Match all routes except for static files, API routes, and Next.js internals
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};