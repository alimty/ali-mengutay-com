import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Note",
  description:
    "A clean, distraction-free note-taking app with markdown support.",
  icons: {
    icon: [
      { url: "/favicon-note.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
