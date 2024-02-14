import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sōshiza",
  description: "Digital Marketing Agency",
};

const Layout = ({ children }) => (
  <div>
    <Head>  
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <body className={inter.className}>{children}</body>
  </div>
);

export default Layout;