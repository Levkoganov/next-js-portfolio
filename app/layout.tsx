import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ActivePageContextProvider } from "./context/ActivePageContext";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lev Koganov Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth bg-slate-900 text-slate-100 ">
      <body className={urbanist.className}>
        <div className="flex flex-row font-main">
          <ActivePageContextProvider>
            <Nav />
            {children}
          </ActivePageContextProvider>
        </div>
      </body>
    </html>
  );
}
