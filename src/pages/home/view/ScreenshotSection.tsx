import type { ScreenshotCardType } from './ScreenshotCard'
import ScreenshotCard from './ScreenshotCard'

import dashboardImg from '@/assets/images/screenshots/dashboard.webp'
import allTransactionsImg from '@/assets/images/screenshots/all-transactions.webp'
import addTransactionImg from '@/assets/images/screenshots/add-transaction.webp'
import insightsImg from '@/assets/images/screenshots/insights.webp'
import settingsImg from '@/assets/images/screenshots/settings.webp'


const ScreenshotItem: ScreenshotCardType[] = [
  {
    src: dashboardImg,
    title: 'Dashboard',
    description: 'Overview of all your spending and transactions in one place.',
  },
  {
    src: allTransactionsImg,
    title: 'All Transactions',
    description: 'View and manage all your transactions',
  },
  {
    src: addTransactionImg,
    title: 'Add Transaction',
    description: 'Quick and eacy transaction entry.',
  },
  {
    src: insightsImg,
    title: 'Insights',
    description: 'In-depth analytics and reports',
  },
  {
    src: settingsImg,
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