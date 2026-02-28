import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Poom Relax",
  description: "เว็ปไซต์หลักของ นายภูริพัฒน์ เหมทานนท์ ใช้สำหรับแสดงข้อมูลต่างๆ มีผลงานเว็ปไซต์ให้ได้ใช้งาน",
  keywords: ["Poom Relax", "poomrelax", "นายภูริพัฒน์ เหมทานนท์", "เว็ปไซต์นายภูริพัฒน์ เหมทานนท์", "website Poom Relax"],
  icons: {
    icon: '/poomrelaxIconPNG.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="backdrop"></div>
        {children}
      </body>
    </html>
  );
}
