import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import { Providers } from "./providers";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MagicWrite",
  description: "Bring the magic to your words with MagicWrite!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <div>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
