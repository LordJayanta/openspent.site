import Footer from '../../shared/component/Footer'
import Header from '../../shared/component/Header'
import DownloadSection from './view/DownloadSection'
import FeaturesSection from './view/FeaturesSection'
import HeroSection from './view/HeroSection'
import MissionSection from './view/MissionSection'
import ScreenshotsSection from './view/ScreenshotSection'
import TestimonialSection from './view/TestimonialSection'

function Index() {
  return (
    <div className={`bg-[#050506] text-gray-200 selection:bg-accentGreen selection:text-black antialiased`}>
      <Header />

      <HeroSection />
      <FeaturesSection />
      <MissionSection />
      <ScreenshotsSection />
      <DownloadSection />
      <TestimonialSection />

      <Footer />
    </div>
  )
}

export default Index