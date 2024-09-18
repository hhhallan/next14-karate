import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Liste des pages en construction
  const pagesUnderConstruction = ["/events", "/contact", "/articles", "/clubs"];

  if (pagesUnderConstruction.includes(url.pathname)) {
    url.pathname = "/construction"; // Redirige vers la page "Construction"
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Continue le traitement si la page n'est pas en construction
}
