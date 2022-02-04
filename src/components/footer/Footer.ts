import styled from 'styled-components';
import tw from "tailwind-styled-components"


export const ContainerFooter = tw.div`
    bg-indigo-900
    h-64
    text-center
    item-center
`
export const Text = tw.h1`
    pt-7
    text-2xl 
    font-extrabold 
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400
`
export const FooterImg = tw.img`
    h-200
    w-100
    p-3
    inline-block
`

export  const Corporation = tw.h3`
    text-xs
    text-white
`