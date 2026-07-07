import FeaturesCard, { type FeaturesCardType } from './FeaturesCard'
import { FaCode, FaLock } from 'react-icons/fa'
import { RiWifiOffLine } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbFileDatabase } from 'react-icons/tb'

const features: FeaturesCardType[] = [
  {
    icon: <FaCode className='w-6 h-6' />,
    title: 'Open Source',
    description: 'OpenSpent is an open source project. You can view the source code on GitHub.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'Data Privacy',
    description: 'Your data remains on your device. We don\'t collect any personal information.',
  },
  {
    icon: <RiWifiOffLine className='w-6 h-6' />,
    title: '100% Offline',
    description: 'Full operations offline. Your data never leaves your device through software logs.',
  },
  {
    icon: <FaLock className='w-6 h-6' />,
    title: 'No Tracking',
    description: 'Completely clean code structure with on-demand zero telemetry layers built in.',
  },
  {
    icon: <SiGoogleanalytics className='w-6 h-6' />,
    title: 'Smart Insights',
    description: 'Built-in analytics and reports to help you make smarter decisions.',
  },
  {
    icon: <TbFileDatabase className='w-6 h-6' />,
    title: 'Export & Import',
    description: 'Export and import your data. Keep your backup whenever you want.',
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