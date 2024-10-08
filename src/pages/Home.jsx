import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Features from '../components/Features'
import HowToWork from '../components/HowToWork'
import RoadMap from '../components/RoadMap'
import Specification from '../components/Specification'
import Faq from '../components/Faq'
import WhyUs from '../components/WhyUs'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <HowToWork />
      <RoadMap />
      <Specification />
      <WhyUs />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
