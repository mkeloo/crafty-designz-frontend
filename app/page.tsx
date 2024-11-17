import Navbar from "@/components/MainWebsite/Navbar";
import FooterBottom from "@/components/MainWebsite/FooterBottom";
import FAQ from "@/components/MainWebsite/FAQ";
import Hero from "@/components/MainWebsite/Hero";

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