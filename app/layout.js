import "./globals.css";

export const metadata = {
  title: "Clique",
  description: "Clique — media, creators and culture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
