import type { NavItemType } from '../type/type'
import FooterLinkList from './FooterLinkList'
import iconImg from "@/assets/images/icon.webp"


const legalItems: NavItemType[] = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Condition', href: '/terms' }
]

const resourcesItems: NavItemType[] = [
    { name: 'GitHub Repository', href: 'https://github.com/LordJayanta/openspent' },
    { name: 'Contribute', href: 'https://github.com/LordJayanta/openspent' },
    { name: 'FAQ', href: '/' },
    { name: 'About', href: '/' },
]

const productItem: NavItemType[] = [
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Download', href: '#download' },
    { name: 'Changelog', href: 'https://github.com/LordJayanta/openspent/releases' },
];

function Footer() {
    return (
        <footer
            className="border-t border-neutral-900 bg-brandBg text-xs text-textMuted mt-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Brand Identity Info */}
                <div className="col-span-1 lg:col-span-5 space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src={iconImg} className="w-12 h-12 flex items-center justify-center shadow-md" alt="OpenSpent Logo" />
                        <span className="text-2xl font-bold text-white tracking-tight">OpenSpent</span>
                    </div>
                    <p className="max-w-md leading-relaxed text-neutral-500 text-sm sm:text-base">
                        An open-source expense tracker for everyone. Track smarter, spend better, live better.
                    </p>
                </div>

                {/* Right Column: Dynamic Responsive Navigation Links */}
                <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <FooterLinkList name='Product' navItem={productItem} linkType='a' />
                    <FooterLinkList name='Resources' navItem={resourcesItems} />
                    {/* The legal column spans nicely or naturally drops to a clean next row on narrow devices */}
                    <FooterLinkList name='Legal' navItem={legalItems} />
                </div>


                {/* <!-- Bottom Footnote Row --> */}
                <div
                    className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-neutral-600 space-y-2 sm:space-y-0"
                >
                    <p>&copy; 2026 OpenSpent. All rights reserved.</p>
                    <p className="flex items-center">
                        Made with <span className="text-red-500/80 mx-1">♥</span> by Open Source
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer