'use client'

import AboutMe from "@/components/AboutMe"
import HomeComponent from "@/components/Home"

export default function Home() {


  return (
    <main className='font-poppins bg-my-very-dark-purple'>
      <HomeComponent />
      <AboutMe/>
    </main>
  )
}
