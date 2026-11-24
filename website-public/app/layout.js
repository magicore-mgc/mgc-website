import { generatePageContent, SITE } from "@magicore/content";

export const metadata = {
    title: generatePageContent("home").title,
    description: SITE.description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi" className="bg-background text-foreground">
            <body className="min-h-screen flex flex-col font-sans antialiased">
                <header className="flex items-center justify-between border-b border-border px-6 py-4">
                    <a
                        href="/"
                        className="font-bold text-xl tracking-tight text-primary"
                    >
                        {SITE.siteName}
                    </a>
                    <nav className="flex gap-6 text-sm font-medium text-muted">
                        <a href="/">Trang chủ</a>
                        <a href="/admin">Quản trị</a>
                    </nav>
                </header>
                <main className="flex-1 px-6 py-12">{children}</main>
                <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted">
                    {generatePageContent("home").badge}
                </footer>
            </body>
        </html>
    );
}
