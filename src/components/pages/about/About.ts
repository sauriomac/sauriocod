import tw from "tailwind-styled-components"


export const ContainerAbout = tw.div`
    p-12
    h-full
    w-full
    flex
    flex-col
    justify-center
    items-center
    mb-2
`

export const AboutDiv = tw.div`
    h-[27rem]
    w-[63rem]
    bg-indigo-900
    rounded-[20px]
    shadow-2xl
`

export const Text = tw.p`
    h-46
    w-[61rem]
    mt-12
    text-5xl
    text-center
    font-bold
    text-transparent
    bg-clip-text
    bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 animate-gradient-x
`
export const TeamDiv = tw.div`
    m-5
    h-96
    w-4/5
    flex
    flex-row
    flex-wrap
    justify-center
    text-center
`

export const Title = tw.h1`
    text-white
    text-center
    font-extrabold
    text-3xl
    mt-6
`

export const Texto = tw.h1`
    mt-5
    w-25
    text-xl
    text-white
    text-center
`
export const Dots =tw.p`
    w-3 
    h-3 
    mx-2
    bg-slate-400
    rounded-full
`