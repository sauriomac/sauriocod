import React from "react";
import { ButtonContact, ContactDiv, ContainerContact, Title } from "./Contact";

const Contact = () => {
  return (
    <div id="Contact">
      <ContainerContact>
        <ContactDiv>
          <Title>Contact</Title>
          <ButtonContact>Send</ButtonContact>
        </ContactDiv>
      </ContainerContact>
    </div>
  );
};

export default Contact;
