import "@/styles/global.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="h-screen w-screen">{children}</body>
        </html>
    );
}
