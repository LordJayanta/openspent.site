import walletImg from "@/assets/images/wallet.webp" 

const MissionSection = () => {
  return (
    <section
      id='mission'
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-b from-transparent via-neutral-950/40 to-transparent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider block" >OUR MISSION</span>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight" >
            Empowering you to take <br />
            <span className="text-emerald-400" >control of your money</span>
          </h2>
          <p className="text-textMuted text-sm max-w-xl leading-relaxed">
            We created OpenSpent to help everyone manage their finances without
            compromising privacy. Simple, powerful, and open for all
            distributions worldwide.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-emerald-400">✔</span>
              <span className="text-neutral-300 font-medium">Simplicity First — Easy to Use for Everyone</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-emerald-400">✔</span>
              <span className="text-neutral-300 font-medium">Transparent Codebase — Auditable on GitHub</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-emerald-400">✔</span>
              <span className="text-neutral-300 font-medium" >Zero Telemetry — No Hidden Analytical Collection</span>
            </div>
          </div>
        </div>

        {/* <!-- Conceptual Visual Wallet Placeholder --> */}
        <div className="lg:col-span-5 flex justify-center">
          <img src={walletImg} className='' />
        </div>
      </div>
    </section>
  )
}

export default MissionSection