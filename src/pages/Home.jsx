
import AboutUs from '../components/homeComponents/About'
import BrandJourney from '../components/homeComponents/BrandJourny'
import HeroSlider from '../components/homeComponents/Hero'
import Navsankalp from '../components/homeComponents/Navsanklap'
import Services from '../components/homeComponents/Technologies'
import CustWebDev from '../components/homeComponents/CustWebDev'
import TechStack from '../components/homeComponents/TechStack'
import DigitalServices from '../components/homeComponents/Digital-services'
import GsapReveal from '../components/GsapReveal'

const Home = () => {
  return (
    <>
      <GsapReveal width="100%">
        <HeroSlider />
      </GsapReveal>
      <GsapReveal width="100%">
        <AboutUs />
      </GsapReveal>
      <GsapReveal width="100%">
        <Navsankalp />
      </GsapReveal>
      <GsapReveal width="100%">
        <BrandJourney />
      </GsapReveal>
      <GsapReveal width="100%">
        <Services />
      </GsapReveal>
      <GsapReveal width="100%">
        <DigitalServices variant="home" />
      </GsapReveal>
      <GsapReveal width="100%">
        <CustWebDev />
      </GsapReveal>
      <GsapReveal width="100%">
        <TechStack />
      </GsapReveal>
    </>
  )
}

export default Home