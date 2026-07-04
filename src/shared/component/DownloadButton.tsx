import React from 'react'
import { Link } from 'react-router'

type Props = {
    icon: React.ReactNode,
    title: string,
    subtitle: string
}

function DownloadButton({ icon, title, subtitle }: Props) {
    return (
        <div>
            <Link
                to="#"
                className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 px-6 py-3 rounded-xl flex items-center space-x-3 text-left transition w-48"
            >
                {icon}
                <div>
                    <p className="text-[10px] text-neutral-400 uppercase">{subtitle}</p>
                    <p className="text-sm font-bold text-white">{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default DownloadButton