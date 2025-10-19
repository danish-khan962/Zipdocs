import React from 'react'

type BlurCircleProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

const BlurCircle = ({ left, right, top, bottom }: BlurCircleProps) => {
  return (
    <div
      className={[
        'h-[180px]',
        'w-[180px]',
        'sm:h-[240px]',
        'sm:w-[240px]',
        'md:h-[280px]',
        'md:w-[280px]',
        'lg:h-[320px]',
        'lg:w-[320px]',
        'bg-gradient-to-r',
        'from-moonlight-100/50',
        'via-moonlight-200/50',
        'to-moonlight-100/50',
        'dark:brightness-[40%]',
        'rounded-full',
        'absolute',
        top,
        bottom,
        left,
        right,
        'blur-3xl',
        'backdrop-blur-md',
        '-z-100',
      ]
        .filter(Boolean) // removes undefined or false values
        .join(' ')
      }
    />
  )
}

export default BlurCircle
