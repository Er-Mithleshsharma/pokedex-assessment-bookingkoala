import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Popular from "@/components/Popular"
import PopularClient from "@/components/PopularClient"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PopularClient/>
    </div>
  )
}

export default page