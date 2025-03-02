import About from "./components/about/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Hero />
        <About />
    </div>
  );
}
