import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Mengütay - Personal Website",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#212224]">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
