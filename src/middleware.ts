import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLoggedIn } from "@/hooks/isLoggedIn";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	// Auth redirect logic
	const isAuth = path === "/login" || path === "/signup";

	const loggedIn = request.cookies.get("isLoggedIn")?.value || "";

	if (isAuth && loggedIn) {
		return NextResponse.redirect(new URL("/profile", request.nextUrl));
	}

	// Profile redirect logic
	const isProfile = path === "/profile";
	if (!loggedIn && isProfile) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/login", "/signup", "/profile", "/dashboard"],
};
