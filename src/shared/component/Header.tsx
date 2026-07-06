import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"
import iconImg from "@/assets/images/icon.webp"

function Header() {
    return (
        <header
            className="border-b border-neutral-900 bg-brandBg/80 backdrop-blur sticky top-0 z-50"
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
            >
                <div className="flex items-center space-x-2">
                    <img src={iconImg} className="w-12 h-12 flex items-center justify-center shadow-md" />
                    <span className="font-bold text-white text-lg tracking-tight">OpenSpent</span>
                    <span className="animate-pulse text-[10px] bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded-full font-medium border border-emerald-900/50" >Open Source</span>

                </div>

                <nav
                    className="hidden md:flex items-center space-x-8 text-xs font-medium text-textMuted"
                >
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
                        <FaGithub className="w-4 h-4 fill-current" />
                        <span>Star on GitHub</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header