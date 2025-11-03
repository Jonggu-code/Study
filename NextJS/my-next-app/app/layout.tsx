import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Next.js App",
  description: "Next.js Layout Practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        ></link>
      </head>
      <body className="antialiased bg-background text-text">
        <header className="bg-white shadow-sm">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold text-blue-600">
              Jonggu Study
            </h1>
            <ul className="flex gap-6 text-gray-700">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main */}
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-innter text-center py-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Jonggu Study — All rights reserved.
        </footer>
      </body>
    </html>
  );
}
