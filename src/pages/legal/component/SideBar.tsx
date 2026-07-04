import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router'

type Props = {
  GuaranteeCard?: {
    title: string,
    description: string,
  }
}

function SideBar({ GuaranteeCard }: Props) {
  useEffect(() => {

  }, [])
  return (
    <aside className="space-y-8 lg:col-span-1">
      <div>
        <h2 className="text-white text-lg font-bold mb-4">Legal</h2>
        <nav className="space-y-1">
          <NavLink to={'/privacy'} className={({ isActive }) => (`block px-4 py-2 rounded-xl text-sm font-medium ${isActive ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/40' : 'text-textMuted hover:text-white transition'}`)}>Privacy Policy</NavLink>
          <NavLink
            to="/terms"
            className={({ isActive }) => (`block px-4 py-2 rounded-xl text-sm font-medium ${isActive ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/40' : 'text-textMuted hover:text-white transition'}`)}
          >Terms & Condition</NavLink>
        </nav>
      </div>

      {/* <!-- Guarantee Card --> */}
      <div
        className="bg-cardBg border border-neutral-800/80 rounded-2xl p-6 text-center space-y-4 shadow-sm"
      >
        <div
          className="mx-auto w-12 h-12 bg-emerald-950/50 border border-emerald-800/30 rounded-full flex items-center justify-center text-emerald-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm leading-snug">{GuaranteeCard?.title}</h3>
          <p className="text-textMuted text-xs mt-2 leading-relaxed">{GuaranteeCard?.description}</p>
        </div>
      </div>
    </aside>
  )
}

export default SideBar