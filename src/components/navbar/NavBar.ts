import styled from 'styled-components';
import tw from "tailwind-styled-components"


export const NavBarMenu = tw.div`
h-20
w-100%
bg-indigo-900
flex
justify-between


`

export const Text = tw.h1`
    text-3xl
    font-bold
    underline
    

    
`

export const NavImg = styled.img`
    height: 100px;
    margin-top:16px;
    margin-left:60px;
`
export const List = styled.nav`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin:30px;
    justify-content: space-between;
`

export const Lis = tw.li`
    m-4
    text-white
    hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400

    cursor-pointer
`