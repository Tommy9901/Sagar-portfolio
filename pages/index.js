import { AboutMe } from "@/components/aboutMe/About";
import { Experience } from "@/components/Experience/Experiences";
import { Footer } from "@/components/footer/Footer";
import { FooterNav } from "@/components/footer/Footer-nav";
import { HeaderMenu } from "@/components/HeaderMenu";

import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills/Skill";
import { Header } from "@/components/TopHeader";
import { Works } from "@/components/Work/Works";

export default function Home() {
  return (
    <main max-w-1440px className="dark:bg-[#030712]">
      <Nav/>

      <Header />

      <AboutMe />
      <Skills />
      <Experience />
      <Works />
      <Footer />
      <FooterNav />
      
    </main>
  );
}
