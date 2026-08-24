import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BhaiDilSe from "@/components/BhaiDilSe";
import ArogyaDoot from "@/components/ArogyaDoot";
import KhelShiksha from "@/components/KhelShiksha";
import SanskaarSamaj from "@/components/SanskaarSamaj";
import ApneLog from "@/components/ApneLog";
import Samvaad from "@/components/Samvaad";
import BhaiSeJudo from "@/components/BhaiSeJudo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BhaiDilSe />
        <ArogyaDoot />
        <KhelShiksha />
        <SanskaarSamaj />
        <ApneLog />
        <Samvaad />
        <BhaiSeJudo />
      </main>
      <Footer />
    </>
  );
}
