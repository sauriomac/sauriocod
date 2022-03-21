
import { ContainerFooter, Corporation, FooterImg, Text } from "./Footer";
import navimg from "../../asset/Logosvg.svg";

const Footer = () => {
  return (
    <ContainerFooter>
      <Text>Do you want to step in to the future before others</Text>
      <FooterImg src={navimg} />
      <Corporation>© 2022 sauriocode. All rights reserved.</Corporation>
    </ContainerFooter>
  );
};

export default Footer;
