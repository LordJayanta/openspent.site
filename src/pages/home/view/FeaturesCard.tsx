import React from 'react'

export type FeaturesCardType = {
    icon: React.ReactNode,
    title: string,
    description: string,
}

function FeaturesCard({ icon, title, description }: FeaturesCardType) {
    return (
        <div
            className="hover:scale-110 bg-[#0e0f11] border border-neutral-900 p-5 rounded-2xl space-y-4 hover:border-neutral-800 transition"
        >
            <div
                className="w-12.5 h-12.5 rounded-2xl bg-emerald-900/40 flex items-center justify-center text-emerald-400 text-sm border border-emerald-900/30"
            > {icon} </div>
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            <p className="text-textMuted text-xs leading-relaxed">{description}</p>
        </div>
    )
}

export default FeaturesCard