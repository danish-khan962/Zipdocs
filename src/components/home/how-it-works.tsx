import React from 'react'
import gradientBackground from "../../../public/images/gradient.png"
import Arrow from "../../../public/images/arrow.png"
import Image from 'next/image'

const workSteps = [
    {
        image: "/images/step_1.png",
        title: "Upload PDF",
        description: "Select the PDF document you want to summarize from your device."
    },
    {
        image: "/images/step_2.png",
        title: "AI Processing",
        description: "Our AI reads, extracts key conepts, and generates a concise summary."
    },
    {
        image: "/images/step_3.png",
        title: "Quick Summary",
        description: "Recieve a clear and concise summary of your PDF in seconds."
    },
]

const HowItWorks = () => {
    return (
        <section
            className='relative w-full flex flex-col justify-center items-center mt-14 md:mt-16 py-8 md:py-10 px-8 md:px-10 lg:px-0'
            style={{
                backgroundImage: `url(${gradientBackground.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='container flex flex-col justify-center items-center space-y-3 md:space-y-4 lg:space-y-6 bg-white/25 p-6 md:p-10 lg:p-14 backkdrop-blur-lg rounded-3xl'>
                <h3 className='uppercase font-bold text-moonlight-400 text-lg md:text-xl lg:text-2xl'>
                    How we do it
                </h3>

                <h2 className='text-2xl md:text-3xl lg:text-4xl w-[400px] md:w-[500px] lg:w-[600px] max-w-full text-center leading-tight md:leading-snug font-bold tracking-tight text-[#2C2C2C]'>
                    Follow 3 steps to turn your PDF into a smart summary
                </h2>

                <div className='mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12'>
                    {
                        workSteps.map((step, index) => (
                            <div
                                className='relative group hover:outline-2 hover:outline-moonlight-200 rounded-4xl'
                                key={index}
                            >
                                <div
                                    className='flex flex-col justify-center items-center text-center space-y-3 px-6 py-8 md:px-8 md:py-10 rounded-4xl group-hover:bg-linear-to-tr group-hover:from-moonlight-100/50 group-hover:via-moonlight-200/10 group-hover:to-moonlight-100/20 transition-all duration-200 ease-in-out'
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={1000}
                                        height={1000}
                                        className='h-12 w-12'
                                    />
                                    <p className='font-bold text-base md:text-lg lg:text-xl text-[#2C2C2C]'>
                                        {step.title}
                                    </p>
                                    <p className='w-[300px] max-w-full text-xs md:text-sm lg:text-base text-shadow-neutralText-2 dark:text-neutralText-1 font-medium'>
                                        {step.description}
                                    </p>
                                </div>
                                {index !== workSteps.length - 1 && (
                                    <Image
                                        src={Arrow}
                                        alt='arrow'
                                        height={700}
                                        width={700}
                                        className='h-6 w-14 md:h-8 md:w-16 lg:h-10 lg:w-24 -rotate-90 md:rotate-180 absolute right-[40%] md:-right-12 -bottom-8 md:top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-in-out'
                                    />
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorks