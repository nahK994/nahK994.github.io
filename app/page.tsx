import AboutOld from "./components/about-old/page";
import About from "./components/about/page";
import Hero from "./components/hero/page";
import Sidebar from "./components/sidebar/page";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero />
        <AboutOld />
        {/* <About /> */}
    </div>
  );
}
