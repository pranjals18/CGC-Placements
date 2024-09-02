import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ProtectedLayout from "./ProtectedLayout";  // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IIIT DWD CGC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ProtectedLayout>{children}</ProtectedLayout>
        </Providers>
      </body>
    </html>
  );
}
