import React from 'react'
import ResourcesSection from '../ResourceSection/ResourceSection'
import DecarboniseSection from '../DecarboniseSection/DecarboniseSection'
import ClientShowcase from '../ClientShowCase/ClientShowCase'
import ShowCaseSection from '../ShowCaseSection/ShowCaseSection'
import ScrollSpyComponent from '../ScrollSpy/ScrollSpyComponent'
import DecarbonisationStats from '../DecarbonisationStats/DecarbonisationStats'
import HeroSection from '../HeroSection/HeroSection'
import { MarqueeDemo } from '../Marquee/MarqueeDemo'
import { HeroVideoDialogDemo } from '../HeroVedioDialog/HeroVedioDialog'
import CertifiedPlatform from '../CertifiedPlathform/CertifiedPlathform'
import NetZeroJourney from '../NetZeroJourney/NetZeroJourney'

const Home = () => {
  return (
    <div>
    <HeroSection/>
    {/* <MarqueeDemo/> */}
    <HeroVideoDialogDemo></HeroVideoDialogDemo>
    <NetZeroJourney></NetZeroJourney>
    {/* <CertifiedPlatform></CertifiedPlatform> */}
   <DecarbonisationStats></DecarbonisationStats>
   <ScrollSpyComponent/>
   <ShowCaseSection></ShowCaseSection>
   {/* <ClientShowcase></ClientShowcase> */}
   <DecarboniseSection></DecarboniseSection>
   <ResourcesSection></ResourcesSection>
    </div>
  )
}

export default Home
