import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // you can choose the weights you need
  variable: "--font-poppins", // custom CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "SecureSafeTech",
  description: "Pathway to a Safer Tomorrow",
  metadataBase: new URL("https://secure-safe-tech.vercel.app/"), // ✅ ADD THIS

  openGraph: {
    title: "SecureSafeTech",
    description: "Pathway to a Safer Tomorrow",
    images: [
      {
        url: "/companyLogo.jpg", // ✅ becomes full URL with metadataBase
        width: 1200,
        height: 630,
        alt: "SecureSafeTech Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SecureSafeTech",
    description: "Pathway to a Safer Tomorrow",
    images: ["/companyLogo.jpg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-[#f8fafc] dark:text-white text-slate-700  antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
