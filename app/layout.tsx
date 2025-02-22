import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js 15 project with custom fonts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>

    </html>
  );
}
