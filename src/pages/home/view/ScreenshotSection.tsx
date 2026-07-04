import type { ScreenshotCardType } from './ScreenshotCard'
import ScreenshotCard from './ScreenshotCard'

const ScreenshotItem: ScreenshotCardType[] = [
  {
    src: './assets/images/screenshots/dashboard.webp',
    title: 'Dashboard',
    description: 'Overview of all your spending and transactions in one place.',
  },
  {
    src: './assets/images/screenshots/all-transactions.webp',
    title: 'All Transactions',
    description: 'View and manage all your transactions',
  },
  {
    src: './assets/images/screenshots/add-transaction.webp',
    title: 'Add Transaction',
    description: 'Quick and eacy transaction entry.',
  },
  {
    src: './assets/images/screenshots/insights.webp',
    title: 'Insights',
    description: 'In-depth analytics and reports',
  },
  {
    src: './assets/images/screenshots/settings.webp',
    title: 'Settings',
    description: 'Manage your account settings and preferences',
  }

]

function ScreenshotsSection() {
  return (
    <section
      id='Screenshots'
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center justify-center">
        <div className="lg:col-span-3 space-y-2">
          <span
            className="text-xs font-semibold text-emerald-500 uppercase tracking-wider block"
          >SLEEK . MODERN. INTUITIVE</span>
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Beautifully crafted for everyone
          </h2>
        </div>

        <div
          className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4"
        >
          {/* <!-- Box loop --> */}
          {ScreenshotItem.map((screenshot, index) => (
            <ScreenshotCard
              key={index}
              src={screenshot.src}
              title={screenshot.title}
              description={screenshot.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScreenshotsSection