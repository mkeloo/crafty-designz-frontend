import Navbar from "@/components/Home/Navbar";
import FooterBottom from "@/components/Home/FooterBottom";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Content */}
      <main className="w-full max-w-screen-2xl mx-auto">
        <Hero />
        <FAQ />
      </main>
      <FooterBottom />
    </div>
  );
}