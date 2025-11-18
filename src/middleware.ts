import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 허용할 페이지들은 그대로 통과
  const allowedPaths = [
    "/stock-add",
    ,
  ];

  if (allowedPaths.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // 정적 파일, Next 내부 자원, API는 통과
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 그 외 모든 경로는 루트로 리다이렉트
  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  // _next, api, 확장자 있는 자원 제외
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};


