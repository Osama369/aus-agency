import HeroSection from "@/components/Herosection";
import Services from "@/components/Services";
import ProjectSlider from '@/components/ProjectsImg'
import Team from "@/components/Team";


export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <Services/>
        <ProjectSlider/>
       <Team/>
       
      </main>
  );
}
