import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa'
import { Link } from 'react-router'
import heroImg from '@/assets/images/hero.webp'

function HeroSection() {
    return (
        <section
            id='home'
            className="md:max-h-181 md:h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden"
        >

            <div className="lg:col-span-7 space-y-6 z-10">
                <span
                    className="inline-flex items-center space-x-1.5 text-[11px] bg-emerald-950/60 text-emerald-400 px-3 py-1 rounded-full border border-emerald-900/40 font-medium animate-pulse"
                >
                    <FaGithub className="w-4 h-4 text-emerald-400" />
                    <span>Open Source Utility</span>
                </span>
                <div className="space-y-6">
                    <h1
                        className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
                    >
                        Track Smarter.<br />
                        <span
                            className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-500"
                        >Spend Better.</span>
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
                <div className="flex flex-wrap gap-3 pt-4">
                    <Link
                        to="https://github.com/LordJayanta/openspent"
                        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-semibold px-6 py-5 rounded-xl transition shadow-lg shadow-emerald-900/20"
                    >
                        <FaGooglePlay className="w-6 h-6" />
                        <span>Get it on Google Play</span>
                    </Link>
                    <Link
                        to="https://github.com/LordJayanta/openspent"
                        className="flex items-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white text-base font-semibold px-6 py-5 rounded-xl transition"
                    >
                        <FaApple className="w-6 h-6" />
                        <span>Get it on AppStore</span>
                    </Link>
                    <Link
                        to="https://github.com/LordJayanta/openspent/releases"
                        className="flex items-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white text-base font-semibold px-6 py-5 rounded-xl transition"
                    >
                        <FaGithub className="w-6 h-6" />
                        <span>Git releases</span>
                    </Link>
                </div>
                <p className="text-neutral-500 text-base font-medium pl-1">
                    Private. Open Source. Free Forever.
                </p>
            </div>

            {/* <!-- Hero Isometric Graphic Display --> */}
            <div className="lg:col-span-4 flex justify-center relative">

                <img src={heroImg} alt='heroImg' className='w-full h-fit' />

            </div>
        </section >
    )
}

export default HeroSection