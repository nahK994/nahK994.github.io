import About from "./components/about/page";
import ContactMe from "./components/contact-me/page";
import Experiences from "./components/experiences/page";
import Hero from "./components/hero/page";
import Sidebar from "./components/sidebar/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero />
        <About />
        <Skills />
        <Experiences/>
        <ContactMe />
    </div>
  );
}
