import Image from "next/image";

export default function About() {
    return <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
    <h1 className="text-4xl font-bold text-green-600 mb-4">About Me 🍀</h1>
    <p className="text-lg max-w-2xl mb-8">
      Hey there! I’m Shomi Khan — a curious soul from Bangladesh 🇧🇩 who loves learning and building tech from the ground up. 🛠️ 
      Whether it’s crafting low-level systems, diving deep into machine learning 🤖, or playing around with web development 🌐,
      I’m always ready for a challenge!
    </p>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">My Passions 💡</h2>
    <ul className="text-lg mb-8">
      <li>✨ Low-Level Systems</li>
      <li>🌐 Web Development</li>
      <li>⚡ Automation</li>
    </ul>

    <h2 className="text-2xl font-semibold text-green-500 mb-4">My Hobbies 🎉</h2>
    <ul className="text-lg">
      <li>🚴‍♂️ Riding on my bicycle</li>
      <li>📺 Binging anime</li>
      <li>💻 Coding (of course!)</li>
    </ul>

    <p className="text-lg mt-8">
      I love to chat 🗨️ rather than talk. If you ping me with a ‘hi’, I’ll be happy to chat with you more! 😊
    </p>
  </section>
}