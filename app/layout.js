import "./globals.css";

export const metadata = {
  title: "SONA Platform",
  description: "Sargodhian Overseas Network Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
