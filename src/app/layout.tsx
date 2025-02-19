import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "MTM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
