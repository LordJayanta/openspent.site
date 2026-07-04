import { FaQuoteLeft } from 'react-icons/fa'

function TestimonialSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-neutral-900/60 bg-linear-to-r from-brandBg to-cardBg/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="col-span-1 lg:col-span-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
          <div className='lg:col-span-5 overflow-hidden flex justify-center lg:justify-start'>
            <img src='./assets/images/heart.webp' alt="heart" className='w-40 h-36 sm:w-48 sm:h-44 md:w-56 md:h-48 lg:w-60 lg:h-53.5 object-contain' />
          </div>
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-3.5 text-center lg:text-left">
            <div className='space-y-2'>
              <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider block">OUR MISSION</span>
              <h4 className="text-white font-bold text-2xl sm:text-3xl lg:text-[28px] leading-8">
                Empowering you to take control of your money
              </h4>
            </div>
            <p className="text-sm sm:text-base text-textMuted leading-relaxed max-w-md pl-0">
              OpenSpent was created to help everyone manage their finances without compromising privacy. Simple, powerful, and open for all.
            </p>
          </div>
        </div>

        {/* Quote Container Wrapper Box */}
        <div
          className="col-span-1 lg:col-span-6 p-6 rounded-2xl relative space-y-4 mt-6 lg:mt-0 ml-0 lg:ml-auto bg-neutral-900/20"
        >
          <div className="max-w-[520px] space-y-8">
            <div className="relative">
              <FaQuoteLeft className="w-12 h-12 text-emerald-400 absolute -top-10 -left-4 sm:-top-14 sm:-left-7" />
              <p className="text-neutral-300 text-xl italic font-normal leading-relaxed relative z-10" >
                I built it for my own use — but if you use it, think of it as made for you... It build you"
              </p>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <div
                className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-emerald-400 border-[1.5px] border-emerald-700"
              > LJ </div>
              <div>
                <p className="text-white text-base font-semibold">LordJayanta</p>
                <p className="text-sm text-neutral-500">OpenSpent Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection