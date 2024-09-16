import { poppins } from "./font";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Situs Next.JS",
    template: "%s | Situs Next.JS",
  },
  description: "Kumpulan tutorial belajar Next.JS dari dasar",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="p-5 my-3 grow bg-white rounded-md shadow-sm">{children}</main>
        <footer className="border-t py-1 text-center text-lg">
          <p>Ini adalah footer.</p>
        </footer>
      </body>
    </html>
  );
}
