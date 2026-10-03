import "./globals.css";

export const metadata = {
  title: "Engineer / Selected Work",
  description:
    "Software engineer based in Nairobi. Selected work in corporate compliance, TypeScript backend systems, and mobile products.",
  icons: { icon: "/icon.svg" },
};
export const viewport = { themeColor: "#10191b" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
