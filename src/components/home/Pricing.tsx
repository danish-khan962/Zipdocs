import React from 'react'
import { Cascadia_Code } from 'next/font/google'
import { BadgeCheck, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button';
import Crown from "../../../public/images/crown.png";
import Image from 'next/image';
import BlurCircle from '../ui/blur-circle';

const cascadiaCode = Cascadia_Code({
  subsets: ["latin"],
  weight: ["700"]
})

const dollarSign = '$';

// Highlights for Core plan {Basic}...
const coreHighlights = [
  "5 PDF summaries per month",
  "Up to 20 pages per PDF",
  "Standard Processing Speed",
  "Basic summary format",
  "Email support"
]

// Highlights for Plus plan {Pro}...
const plusHighlights = [
  "Unlimited PDF summaries",
  "Up to 100 pages per PDF",
  "Priority processing",
  "Custom summary length",
  "Multiple output formats",
  "24/7 priority support"
]

const Pricing = () => {
  return (
    <section className='relative container py-8 md:py-10 flex flex-col justify-center items-center mt-14 md:mt-16 gap-12'>

      {/* Blur circles */}
      <BlurCircle top='top-4' left='left-0' />
      <BlurCircle top='top-1/2' />
      <BlurCircle bottom='bottom-0' right='-right-2'/>

      <h3 className='uppercase font-bold text-moonlight-400 dark:text-moonlight-200 text-lg md:text-xl lg:text-2xl'>
        Choose Your Plan
      </h3>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Plan 1 => Core {Basic} */}
        <div className='flex flex-col justify-start items-start bg-gradient-to-tr from-[#E9E9E9]/50 via-[#FFFFFF] to-[#E9E9E9]/50 dark:bg-gradient-to-tr dark:from-[#2C2C2C]/50 dark:via-[#000000] dark:to-[#2C2C2C]/50 border-2 border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl gap-3'>
          <h2 className='bg-linear-to-r from-moonlight-100 via-moonlight-200 to-moonlight-100 text-base md:text-lg py-1.5 px-8 rounded-full font-semibold dark:text-[#2C2C2C]'>Core</h2>
          <div className='mt-5 flex flex-row items-center gap-4 md:gap-5 lg:gap-6'>
            <h1 className={`${cascadiaCode.className} text-4xl md:text-5xl font-extrabold`}>{dollarSign}8</h1>
            <div className='flex flex-col text-xs leading-tight'>
              <span className='font-semibold'>USD</span>
              <span className='font-medium text-neutral-500 dark:text-neutral-300'>/month</span>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 justify-start items-start mt-6'>
            {coreHighlights.map((highlight, index) => (
              <div className='flex flex-row gap-4 items-center' key={index}>
                  <BadgeCheck className='h-4 md:h-4.5 w-4 md:w-4.5 text-green-600' />
                  <p className='text-sm md:text-base text-neutralText-1 dark:text-neutralText-2'>
                    {highlight}
                  </p>
              </div>
            ))}
          </div>
          <Button className='w-full flex flex-row items-center mt-8 text-xs md:text-sm px-10 py-5 md:py-6 bg-linear-to-r from-moonlight-300 to-moonlight-400 cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200 dark:text-gray-200'>
            <span>Subscribe Now</span>
            <ChevronRight/>
          </Button>
        </div>

        {/* Plan 2 => Plus {Premium} */}
        <div className='flex flex-col justify-start items-start bg-gradient-to-tr from-[#E9E9E9]/50 via-[#FFFFFF] to-[#E9E9E9]/50 dark:bg-gradient-to-tr dark:from-[#2C2C2C]/50 dark:via-[#000000] dark:to-[#2C2C2C]/50 border-4 border-moonlight-400 dark:border-moonlight-300 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl gap-3'>
          <h2 className='relative bg-linear-to-r from-moonlight-100 via-moonlight-200 to-moonlight-100 text-base md:text-lg py-1.5 px-8 rounded-full font-semibold dark:text-[#2C2C2C]'>
            <p>Plus</p>
            <Image
            src={Crown}
            alt='plus crown'
            height={1000}
            width={1000}
            className='h-[30px] w-[30px] absolute right-0 -top-3 rotate-[25deg]'
            />
          </h2>
          <div className='mt-5 flex flex-row items-center gap-4 md:gap-5 lg:gap-6'>
            <h1 className={`${cascadiaCode.className} text-4xl md:text-5xl font-extrabold`}>{dollarSign}15</h1>
            <div className='flex flex-col text-xs leading-tight'>
              <span className='font-semibold'>USD</span>
              <span className='font-medium text-neutral-500 dark:text-neutral-300'>/month</span>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 justify-start items-start mt-6'>
            {plusHighlights.map((highlight, index) => (
              <div className='flex flex-row gap-4 items-center' key={index}>
                  <BadgeCheck className='h-4 md:h-4.5 w-4 md:w-4.5 text-green-600' />
                  <p className='text-sm md:text-base text-neutralText-1 dark:text-neutralText-2'>
                    {highlight}
                  </p>
              </div>
            ))}
          </div>
          <Button className='w-full flex flex-row items-center mt-8 text-xs md:text-sm px-10 py-5 md:py-6 bg-linear-to-r from-moonlight-300 to-moonlight-400 cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200 dark:text-gray-200'>
            <span>Subscribe Now</span>
            <ChevronRight/>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing