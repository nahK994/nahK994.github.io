export default function Hero() {
    return <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50 text-gray-900">
    <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            Hi, I’m Shomi Khan
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
            Software Engineer | Golang Alchemist 🦫 | Python Charmer 🐍 | Passionate about Cloud-Native Development
        </p>
        <a
            href="#projects"
            className="bg-white text-green-500 px-6 py-3 rounded-2xl text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
        >
            View My Work
        </a>
    </div>
</section>

}