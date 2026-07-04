import React from 'react'

export type ScreenshotCardType = {
    src: string,
    title: string,
    description: string,
}

function ScreenshotCard({ src, title, description }: ScreenshotCardType) {
    return (
        <div
            className="hover:scale-110 bg-[#0e0f11] border border-neutral-900 p-4 pb-6 rounded-2xl space-y-4 hover:border-neutral-800 transition flex flex-col items-center justify-center"
        >
            <div
                className="w-32.5 h-67 rounded-2xl flex items-center justify-center overflow-hidden border border-emerald-900/30"
            >
                <img
                    src={src}
                    className='w-full h-full'
                    loading="lazy"
                />
            </div>
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            <p className="text-textMuted text-xs leading-relaxed">{description}</p>
        </div>
    )
}

export default ScreenshotCard