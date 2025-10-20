// HERO SECTION for Landing page.....

import React from 'react'
import { BrainCircuit } from "lucide-react"
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import BlurCircle from '../ui/blur-circle'

const Hero = () => {
    return (
        <section className='relative container flex justify-center items-center py-8 md:py-10'>
            {/* Blur Circle */}
            <BlurCircle top='top-5' left='-left-5' />
            <BlurCircle bottom='bottom-0' right='-right-5' />
            <div className='w-full flex flex-col justify-center items-center'>
                {/* Badge */}
                <Badge variant={"secondary"} className='flex items-center gap-2 bg-transparent border border-moonlight-300 dark:border-moonlight-200 py-1.5 px-8 rounded-full group'>
                    <BrainCircuit className='h-3.5 w-3.5 md:h-4 md:w-4' />
                    <span className='text-xs md:text-sm font-medium'> AI summaries, instantly </span>
                </Badge>
                <h1 className="mt-6 md:mt-10 font-bold text-2xl sm:text-4xl md:text-5xl text-center tracking-tight bg-gradient-to-b from-moonlight-400 to-moonlight-300 dark:bg-gradient-to-b dark:from-moonlight-300 dark:to-moonlight-200 text-transparent bg-clip-text leading-tight lg:leading-snug">
                    Unlock Insights: AI - <br />
                    Powered summaries by Zipdocs
                </h1>
                <p className='mt-5 text-xs sm:text-sm md:text-base font-medium max-w-[500px] w-full text-center text-neutralText-1 dark:text-neutralText-2'>
                    True lenghty documents into clear, actionable briefs.
                    Built for speed, precision and clarity.
                </p>

                <Button className='mt-8 text-xs md:text-sm px-10 bg-linear-to-r from-moonlight-300 to-moonlight-400 cursor-pointer hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200 dark:text-gray-200'>
                    Begin with AI
                </Button>
            </div>
        </section>
    )
}

export default Hero