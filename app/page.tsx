import HeroSection from "@/components/landingPage/HeroSection";
import Services from "@/components/landingPage/Services";

export default function Home() {
  return (
    <main className="flex flex-col gap-28">
      <HeroSection />
      <Services />
    </main>
  );
}
