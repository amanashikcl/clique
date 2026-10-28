import { Geist } from "next/font/google";
import "./globals.css";

// Exposed as a CSS variable; only the partner cards use it (see Partners.js).
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Clique",
  description: "Clique — media, creators and culture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
