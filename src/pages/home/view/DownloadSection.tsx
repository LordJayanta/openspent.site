import DownloadButton from '../../../shared/component/DownloadButton'
import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa'



function DownloadSection() {
    return (
        <section id='download' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-3 space-y-6">
                    <img src="./assets/images/wallet.webp" alt="" />
                </div>

                <div className="lg:col-span-6 space-y-9">
                    <div className="space-y-3 flex flex-col items-center justify-center">
                        <h4 className='text-sm uppercase'>GET STARTED TODAY</h4>
                        <h3 className='text-3xl capitalize'>Download OpenSpent</h3>
                        <p className='text-base text-[#8e9196]'>Private but free, Open-source, and available on your favorite platform</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                        <DownloadButton
                            icon={<FaGooglePlay className='w-8 h-8' />}
                            title="Google Play"
                            subtitle="Get it on"
                        />
                        <DownloadButton
                            icon={<FaApple className='w-8 h-8' />}
                            title="App Store"
                            subtitle="Download on"
                        />
                        <DownloadButton
                            icon={<FaGithub className='w-8 h-8' />}
                            title="GitHub"
                            subtitle="View on"
                        />
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <img src="./assets/images/money_locker.webp" alt="" />
                </div>

            </div>
        </section>
    )
}

export default DownloadSection