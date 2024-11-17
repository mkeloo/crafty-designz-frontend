import Navbar from "@/components/MainWebsite/Navbar";
import FooterBottom from "@/components/MainWebsite/FooterBottom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-screen-2xl mx-auto">
        {/* Add your main content here */}
      </main>
      <FooterBottom />
    </div>
  );
}