import Demo from '@/components/home/Demo'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/how-it-works'
import Pricing from '@/components/home/Pricing'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Demo />
      <HowItWorks />
      <Pricing />
    </>
  )
}

export default page