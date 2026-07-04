import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"

function Header() {
    return (
        <header
            className="border-b border-neutral-900 bg-brandBg/80 backdrop-blur sticky top-0 z-50"
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
            >
                <div className="flex items-center space-x-2">
                    {/* <div
                        className="w-6 h-6 rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 flex items-center justify-center shadow-md"
                    >
                        <span className="text-white text-xs font-bold">$</span>
                    </div> */}
                    <img src="/assets/images/icon.webp" className="w-12 h-12 flex items-center justify-center shadow-md" />
                    <span className="font-bold text-white text-lg tracking-tight">OpenSpent</span>
                    <span className="animate-pulse text-[10px] bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded-full font-medium border border-emerald-900/50" >Open Source</span>

                </div>

                <nav
                    className="hidden md:flex items-center space-x-8 text-xs font-medium text-textMuted"
                >
                    {/* <a href="#" className="text-emerald-400 font-semibold">Home</a> */}
                    <a href="#home" className="hover:text-white transition">Home</a>
                    <a href="#features" className="hover:text-white transition">Features</a>
                    <a href="#mission" className="hover:text-white transition">Mission</a>
                    <a href="#screenshots" className="hover:text-white transition">Screenshots</a>
                    <a href="#download" className="hover:text-white transition">Download</a>
                    <a href="#faq" className="hover:text-white transition">FAQ</a>
                    <a href="#about" className="hover:text-white transition">About</a>
                </nav>

                <div>
                    <Link
                        to="https://github.com/LordJayanta/openspent"
                        className="flex items-center space-x-2 bg-neutral-900/80 border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition"
                    >
                        {/* <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                            />
                        </svg> */}
                        <FaGithub className="w-4 h-4 fill-current" />
                        <span>Star on GitHub</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header