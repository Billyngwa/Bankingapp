import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flash",
  description: "Modern banking platform",
  icons: "/icons/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
        {/* the classname with its corresponding values helps to pass across the fontfamilies we will need through out our entire application */}
      </body>
    </html>
  );
}
