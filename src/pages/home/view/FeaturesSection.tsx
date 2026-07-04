import FeaturesCard, { type FeaturesCardType } from './FeaturesCard'
import { FaCode, FaLock } from 'react-icons/fa'
import { RiWifiOffLine } from 'react-icons/ri'

const features: FeaturesCardType[] = [
  {
    icon: <FaCode className='w-6 h-6' />,
    title: 'Open Source',
    description: 'OpenSpent is an open source project. You can view the source code on GitHub.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'Privacy First',
    description: 'Your data remains on your device. We don\'t collect any personal information.',
  },
  {
    icon: <RiWifiOffLine className='w-6 h-6' />,
    title: 'Offline First',
    description: 'Full operations offline. Your data never leaves your device through software logs.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'No Tracking',
    description: 'Completely clean code structure with on-demand zero telemetry layers built in.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'No Tracking',
    description: 'Completely clean code structure with on-demand zero telemetry layers built in.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'No Tracking',
    description: 'Completely clean code structure with on-demand zero telemetry layers built in.',
  }
]

function FeaturesSection() {
  return (
    <section
      id='features'
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-12 space-y-2">
          <span
            className="text-xs font-semibold text-emerald-500 uppercase tracking-wider block text-center"
          >WHY CHOOSE OPENSPENT</span>
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-center">
            Powerful features for smarter finances
          </h2>
        </div>

        <div
          className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4"
        >
          {/* <!-- Box loop -->c */}
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default FeaturesSection