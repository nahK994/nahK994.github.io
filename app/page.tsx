import About from "./components/about/page";
import ContactMe from "./components/contact-me/page";
import Experiences from "./components/experiences/page";
import Hero from "./components/hero/page";
import Sidebar from "./components/sidebar/page";
import Skills from "./components/skills/page";
import { aboutMe, experiences, hero, navItems, profile, skill } from "./utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero sectionId={navItems[0].id} githubUrl={profile.github.url} hero={hero} />
        <About sectionId={navItems[1].id} aboutMe={aboutMe} />
        <Skills sectionId={navItems[2].id} skill={skill} />
        <Experiences sectionId={navItems[3].id} experiences={experiences} />
        <ContactMe sectionId={navItems[4].id} profile={profile} welcome={aboutMe.welcome} />
    </div>
  );
}
