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
    h-96
    w-2/3
    bg-indigo-900
    rounded-[20px]
    shadow-2xl
    flex
    justify-between
    item-center
    
`

export const Text = tw.p`
    h-46
    w-full
    mt-6
    text-xl
    text-left
    font-extrabold
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
    font-extrabold
    text-2xl
    ml-20
    mt-6
    w-screen
`

export const Texto = tw.h1`
    mt-5
    w-25
    text-xl
    text-white
    text-center
`