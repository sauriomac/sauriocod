import styled from 'styled-components';
import tw from "tailwind-styled-components";
import { Link } from 'react-router-dom';


export const NavBarMenu = tw.div`
h-40
w-full
mb-10
bg-indigo-900
flex
justify-between
fixed
`

export const NavContainer = tw.div`
  lg:{
    flex
    justify-between
    h-20
    z-10
    w-full
    max-w-screen-xl
    mr-auto
    ml-auto
    pr-12
    pl-12
}
  
  pr-7
  pl-7

`;

export const NavLogo = tw(Link)`
  m-20
  justify-self-start
  cursor-pointer
  text-3xl
  flex
  items-center
`;

export const NavImg = tw.img`
  mr-96
`;



export const  NavMobileIcon = tw.div`
lg:hidden


absolute
top-0
right-0
text-5xl
-translate-x-full
translate-y-2/3
text-3xl
cursor-pointer
stroke-red-600


`
interface ClickProps {
    click: boolean;
}
export const NavMenu = styled.ul<ClickProps>`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;

        @media screen and (max-width:960px){
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90vh;
            position: fixed;
            top: 80px;
            left: ${({click}) => click ? 0 : '-100%'};
            opacity: 1;
            transition: all 0.5s ease;
            background-color: rgb(49 46 129);
    }
`
export const NavItem =tw.li`
    lg:h-20
    lg:border-transparent
    lg:hover:border-b-[2px]
    lg:hover:border-indigo-600


    w-full
    rounded-none
    border-transparent
    gradient-to-r from-indigo-500 via-purple-500 to-orange-400
`


export const Navl = tw(Link)`
    lg:{
        text-white
        flex
        align-center
        no-underline
        pt-8
        pr-4
        h-full
  }

`

export  const Navlink = styled(Navl)`

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
  }
}

`