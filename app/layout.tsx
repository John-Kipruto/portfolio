import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOHN KIPRUTO — Full-Stack Engineer",
  description:
    "Portfolio of a full-stack engineer specializing in Next.js, NestJS, React Native, and scalable product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
