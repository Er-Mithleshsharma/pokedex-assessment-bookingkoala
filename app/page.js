import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import PopularServer from "@/components/PopularServer"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <PopularServer />
    </div>
  )
}

export default page