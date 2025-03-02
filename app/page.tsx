import Image from "next/image";

export default function Home() {
  return (
    <div
        className="bg-white border-2 border-dashed border-red-400 rounded-2xl shadow-lg py-8 px-2 sm:px-5 max-w-sm text-center opacity-0 animate-fadeIn">
        <h2 className="font-bold flex justify-center items-center mb-4 text-2xl">
            <span className="animate-wave">👋</span>
            <span className="mb-2 mr-4">🤓</span>
            <span className="text-red-400 drop-shadow-2xl mr-2">Hey there!!</span>
            <span>🎉</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-x-4">
            <p className="text-gray-800 text-lg">I'm Shomi Khan, a backend software engineer 🦫🖥️🐍 from
                Bangladesh 🇧🇩.</p>
            <Image src="/programmer.png" alt="Shomi Khan" width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 mt-4 sm:mt-0" />
        </div>
        <p className="pr-3 text-gray-800 mb-4 text-lg">Apart from coding, I’m an anime fan, former cyclist 🚴, and hobbyist
            photographer 📸.</p>
        <p className="text-gray-800 text-lg">I love to chat 🗨️ rather than talk. If you ping me with a ‘hi’, I'll be happy
            to chat with you more! 😊</p>
        <div className="flex justify-center gap-5 mt-5">
            <a href="https://github.com/nahK994" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width={32} height={32} className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/shomikhan" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/shomi.khan1" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" width={32} height={32} className="w-8 h-8" />
            </a>
        </div>
    </div>
  );
}
