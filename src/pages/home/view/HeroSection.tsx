import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router'
import heroImg from '@/assets/images/hero-2.webp'

function HeroSection() {
    return (
        <section
            className="min-h-screen lg:h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden py-12 lg:py-0"
        >
            <div className="lg:col-span-6 space-y-6 z-10">
                <span
                    className="inline-flex items-center space-x-1.5 text-[11px] bg-emerald-950/60 text-emerald-400 px-3 py-1 rounded-full border border-emerald-900/40 font-medium animate-pulse"
                >
                    <span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                    ></span>
                    <span>Open Source Utility</span>
                </span>
                <div className="space-y-6">
                    <h1
                        className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
                    >
                        Track Smarter.<br />
                        <span className="text-emerald-400">Spend Better.</span>
                    </h1>
                    <p
                        className="text-textMuted text-[20px] sm:text-lg max-w-xl leading-relaxed"
                    >
                        OpenSpent is a modern, privacy-first expense tracker that helps you
                        take control of your money safely and efficiently.
                    </p>
                </div>

                {/* <!-- Small Feature Pills --> */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                    <span
                        className="text-xs bg-neutral-900/60 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-800/80 flex items-center space-x-1"
                    >
                        <span>⚙️</span> <span>Offline First</span>
                    </span>
                    <span
                        className="text-xs bg-neutral-900/60 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-800/80 flex items-center space-x-1"
                    >
                        <span>🛡️</span> <span>No Ads</span>
                    </span>
                    <span
                        className="text-xs bg-neutral-900/60 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-800/80 flex items-center space-x-1"
                    >
                        <span>🔒</span> <span>Privacy Focused</span>
                    </span>
                    <span
                        className="text-xs bg-neutral-900/60 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-800/80 flex items-center space-x-1"
                    >
                        <span>💻</span> <span>Open Source</span>
                    </span>
                </div>

                {/* <!-- Download Buttons CTA --> */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 items-center">
                    <Link
                        target='_blank'
                        to="https://github.com/LordJayanta/openspent"
                        className="col-span-1 flex items-center justify-center space-x-2 sm:space-x-2.5 bg-emerald-700/90 hover:bg-emerald-600 text-white font-semibold px-4 py-3 sm:px-5 sm:py-3.5 md:px-5 md:py-3 rounded-xl transition shadow-lg shadow-emerald-900/20 border border-emerald-900/50"
                    >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                            <FaGooglePlay className="w-full h-full" />
                        </div>
                        <span className="flex flex-col gap-0.5 items-start text-left">
                            <span className="text-[10px] sm:text-xs md:text-xs font-medium opacity-90">Get it on</span>
                            <span className="text-sm sm:text-base md:text-base line-height-none whitespace-nowrap">Google Play</span>
                            <span className="text-[10px] sm:text-xs font-light text-emerald-200/70">(Coming Soon)</span>
                        </span>
                    </Link>

                    <Link
                        target='_blank'
                        to="https://github.com/LordJayanta/openspent"
                        className="col-span-1 flex items-center justify-center space-x-2 sm:space-x-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-4 py-3 sm:px-5 sm:py-3.5 md:px-5 md:py-3 rounded-xl transition shadow-lg shadow-emerald-900/20 border border-neutral-800"
                    >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                            <FaApple className="w-full h-full" />
                        </div>
                        <span className="flex flex-col gap-0.5 items-start text-left">
                            <span className="text-[10px] sm:text-xs md:text-xs font-medium opacity-90">Get it on</span>
                            <span className="text-sm sm:text-base md:text-base line-height-none whitespace-nowrap">AppStore</span>
                            <span className="text-[10px] sm:text-xs font-light text-emerald-200/70">(Coming Soon)</span>
                        </span>
                    </Link>

                    <Link
                        target='_blank'
                        to="https://github.com/LordJayanta/openspent/releases"
                        className="col-span-2 md:col-span-1 flex items-center justify-center space-x-2.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-semibold px-5 py-4 sm:py-3.5 md:px-5 md:py-5.5 rounded-xl transition self-stretch"
                    >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                            <FaGithub className="w-full h-full" />
                        </div>
                        <span className="text-sm sm:text-base md:text-base whitespace-nowrap">Git releases</span>
                    </Link>
                </div>
                <p className="text-neutral-500 text-base font-medium pl-1">
                    Private. Open Source. Free Forever.
                </p>
            </div>

            {/* <!-- Hero Isometric Graphic Display --> */}
            <div className="lg:col-span-6 flex justify-center relative">
                <div
                    className="md:max-h-180 flex items-center justify-center overflow-hidden"
                >
                    <img src={heroImg} className="object-center" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection