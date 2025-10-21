import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
    return (
        <section className='relative container py-8 md:py-10 flex flex-col justify-center items-center text-center mt-14 md:mt-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C2C2C] dark:text-[#E9E9E9]'>
                From Wall of Text to What Matters Most.
            </h2>

            <p className='text-base md:text-lg text-neutralText-1 dark:text-neutralText-2 font-medium mt-4 md:mt-5.5 w-[500px] max-w-full'>
                Summarize any document in seconds with AI-powered precision — anytime, anywhere.
            </p>

            <Button className='mt-10 md:mt-12 text-xs md:text-sm px-10 bg-linear-to-r from-moonlight-300 to-moonlight-400 cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200 dark:text-gray-200'>
                Summarize Now
            </Button>
        </section>
    )
}

export default CTA