import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "ℑ𝔯𝔣𝔞𝔫 • Frontend Developer",
 description: "Irfan is a frontend developer with 1 year of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
 return (
  <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
   <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-200`} suppressHydrationWarning={true}>
    <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
    <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
    <ThemeContextProvider>
     <ActiveSectionContextProvider>
      <Header />
      {children}
      <Footer />

      <Toaster position="top-right" />
      <ThemeSwitch />
     </ActiveSectionContextProvider>
    </ThemeContextProvider>
   </body>
  </html>
 );
}
