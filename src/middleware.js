import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = request.cookies.get("accessToken")?.value;
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const data =
      await // await fetch("http://127.0.0.1:8000/api/admin/current", {
      (
        await fetch(process.env.NEXT_PUBLIC_API_SEVER + "/admin", {
          headers: {
            Authorization: token,
          },
        })
      ).json();
    if (data?.errors) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
