import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galactic Arcade - Enter the Cosmos",
  description: "Experience the ultimate fusion of retro arcade and cosmic adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-['Inter'] text-white">{children}</body>
    </html>
  );
}
