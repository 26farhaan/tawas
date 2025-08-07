// import { NextRequest, NextResponse } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export function middleware(request: NextRequest) {
//   const headerCookies = request.headers.get("cookie");
//   const token = headerCookies?.split(";").find((c) => c.trim().startsWith("access_token=")) || "";

//   console.log(headerCookies);

//   // if (!token && request.nextUrl.pathname.startsWith("/admin")) {
//   //   return NextResponse.redirect(new URL("/login", request.url));
//   // }
//   try {
//     const decoded = jwtDecode(decodeURIComponent(token));
//     console.log(decoded);

//     // Redirect jika bukan admin
//     // if (decoded.role !== "admin") {
//     //   return NextResponse.redirect(new URL("/", request.url));
//     // }

//     return NextResponse.next();
//   } catch (err) {
//     // console.error("Token error:", err);
//     // return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// // Hanya jalankan middleware untuk route tertentu
// export const config = {
//   matcher: ["/admin/:path*"],
// };

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const headerCookies = req.headers.get("cookie");
  const token = headerCookies?.split(";").find((c) => c.trim().startsWith("access_token=")) || "";
  // console.log("============= Middleware called for: =============", req.nextUrl.pathname);
  console.log("============= TOKEN:", headerCookies);

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
