import "./globals.css";

export const metadata = {
  title: "GoldVision AI - Elite Gold Intelligence Terminal",
  description: "Real-time market asset tracking with intelligent neural predictions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-[#f3f4f6] antialiased">
        {children}
      </body>
    </html>
  );
}