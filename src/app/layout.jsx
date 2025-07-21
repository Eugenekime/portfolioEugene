import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Eugene Kim | Frontend Developer Portfolio",
  description:
    "Frontend Developer. I build fast, modern, and responsive websites using React, Next.js, and other cutting-edge technologies. Explore my projects and skills in web development.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased flex flex-col min-h-screen`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
