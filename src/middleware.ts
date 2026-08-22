import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Solo propaga el pathname actual como header para que Server Components
// (que no pueden usar usePathname()) sepan si están en /en/* sin tocar
// el ruteo (sin redirects/rewrites).
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
