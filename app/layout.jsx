import "./globals.css";
export const metadata = {
  title: "Sonal & Aman Wedding 💍",
  description:
    "With love, we invite you to celebrate our wedding on 21 April 2026 ❤️",
  icons: {
    icon: "/icon.jpeg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
