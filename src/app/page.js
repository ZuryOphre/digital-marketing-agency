import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";



export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </main>
  );
}
