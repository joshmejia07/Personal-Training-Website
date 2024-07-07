import Hero from "./Hero"
import Intro from "./Intro"
import Programs from "./Programs"
import Pricing from "./Pricing"
import Banner from "./Banner"
import Success from "./Success"
import Products from "./Products"
import Contact from "./Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Programs />
      <Pricing />
      <Banner />
      {/* <Success /> */}
      <Products />
      <Contact />
    </>
  )
}
