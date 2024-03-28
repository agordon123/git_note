import { withAuth } from "next-auth/middleware";
// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Skip middleware for static files and API routes

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // Redirect to sign-up if there's no session
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/sign-up";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default withAuth({
  callbacks: {
    authorized({ req, token }: { req: NextRequest; token: any }) {
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin";
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|sign-in|sign-up|onboarding|favicon.ico).*)",
  ],
};
