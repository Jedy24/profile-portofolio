import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Jevon Ivander Juandy | Software Engineer & Developer",
  description:
    "Personal portfolio of Jevon Ivander Juandy, a Software Engineer specializing in Frontend Development, Backend Development, REST APIs, AI-powered applications, and scalable web systems.",
  openGraph: {
    title: "Jevon Ivander Juandy | Software Engineer",
    description:
      "Frontend & Backend Developer building reliable systems and meaningful digital experiences.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  metadataBase: new URL("https://portofolio-profile.vercel.app"),
  icons: { icon: "/icons/favicon.svg" },
};
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
