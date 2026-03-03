import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Web3 Career Hub",
    template: "%s | Web3 Career Hub",
  },
  description:
    "Find Web3 jobs, ambassador programs, creator gigs & verified opportunities.",
  keywords: [
    "Web3 Jobs",
    "Crypto Jobs",
    "Ambassador Programs",
    "Web3 Career",
    "Blockchain Jobs",
  ],
  authors: [{ name: "Web3 Career Hub" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
