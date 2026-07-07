import { useState } from "react"
import { FaGithub, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router" // or react-router-dom depending on your setup
import iconImg from "@/assets/images/icon.webp"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#mission", label: "Mission" },
        { href: "#screenshots", label: "Screenshots" },
        { href: "#download", label: "Download" },
        { href: "#about", label: "About" },
    ]

    return (
        <header className="border-b border-neutral-900 bg-brandBg/80 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src={iconImg} className="w-12 h-12 flex items-center justify-center shadow-md" alt="OpenSpent Icon" />
                    <span className="font-bold text-white text-lg tracking-tight">OpenSpent</span>
                    <span className="animate-pulse text-[10px] bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded-full font-medium border border-emerald-900/50">
                        Open Source
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-textMuted">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-white transition">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right Side Actions (GitHub Button & Mobile Menu Trigger) */}
                <div className="flex items-center space-x-4">
                    {/* GitHub Button - Visible on Desktop, hidden on small mobile to save space */}
                    <Link
                        to="https://github.com/LordJayanta/openspent"
                        className="hidden sm:flex items-center space-x-2 bg-neutral-900/80 border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition"
                    >
                        <FaGithub className="w-4 h-4 fill-current" />
                        <span>Star on GitHub</span>
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-textMuted transition p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown Menu */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full bg-[#09090b] border-b border-neutral-900 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2" }`}
            >
                <nav className="flex flex-col p-4 space-y-4 text-sm font-medium text-textMuted">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="hover:text-white transition py-1 border-b border-neutral-900/40 last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Mobile-only fallback GitHub Link inside the drawer for narrow screens */}
                    <Link
                        to="https://github.com/LordJayanta/openspent"
                        onClick={closeMenu}
                        className="flex sm:hidden items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 text-white text-sm font-medium py-2.5 rounded-lg"
                    >
                        <FaGithub className="w-4 h-4 fill-current" />
                        <span>Star on GitHub</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header