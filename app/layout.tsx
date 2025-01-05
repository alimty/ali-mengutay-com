import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Mengütay - Personal Website",
  description: "Personal website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#212224]" suppressHydrationWarning>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
