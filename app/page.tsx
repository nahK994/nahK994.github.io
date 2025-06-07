import About from "./components/sections/About";
import ContactMe from "./components/sections/ContactMe";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";
import Sidebar from "./components/ui/Sidebar";
import Skills from "./components/sections/Skills";
import { aboutMe, experiences, hero, navItems, profile, skill, welcome } from "../content/data";

export default function Home() {
  const baseCSS = "flex items-center justify-center min-h-screen font-mono font-mono bg-gradient-to-b"
  const bg1 = "from-green-50 to-yellow-50"
  const bg2 = "from-yellow-50 to-green-50"

  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero sectionId={navItems[0].id} githubUrl={profile.github.url} hero={hero} bgColor={bg1} baseCSS={baseCSS} />
        <About sectionId={navItems[1].id} aboutMe={aboutMe} bgColor={bg2} baseCSS={baseCSS} />
        <Skills sectionId={navItems[2].id} skill={skill} bgColor={bg1} baseCSS={baseCSS}  />
        <Experiences sectionId={navItems[3].id} experiences={experiences} bgColor={bg2} baseCSS={baseCSS} />
        <ContactMe sectionId={navItems[4].id} profile={profile} welcome={welcome.text} bgColor={bg1} baseCSS={baseCSS} />
    </div>
  );
}
