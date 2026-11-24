import { generatePageContent } from "@magicore/content";

export const metadata = {
  title: generatePageContent("home").title,
  description: "Trang quản trị của dự án magicore-website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="dark">
      <body className="min-h-screen font-sans antialiased">
        <header className="border-b border-border px-6 py-4">
          <span className="font-bold text-2xl">magicore admin</span>
        </header>
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
