import tw from "tailwind-styled-components"


export const ContainerContact = tw.div`
    p-12
    h-screen
    w-full
    flex
    flex-col
    justify-center
    items-center
`

export const ContactDiv = tw.div`
    m-5
    h-96
    w-2/3
    border
    border-orange-100
    rounded-[20px]
    flex
    flex-col
    justify-center
    items-center
`

export const ButtonContact = tw.button`
    h-10
    w-20
    mt-64
    text-white
    g-transparent 
    hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400
    hover:text-white 
    hover:border-white
    py-2
    border 
    border-orange-500
    rounded
`
export const Title = tw.h1`
    text-white
    font-extrabold
    text-xl
    m-3 
`