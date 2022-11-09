<<<<<<< HEAD

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   }}>
        DevPay
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Mobile development</FooterLink>
            <FooterLink href="#">Web development</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Phone Number</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
=======
import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <ul className='flex flex-wrap items-center justify-center'>
                    <li><span className="font-bold">Name:</span></li>
                    <li> < span className="font-bold"> Email:</span></li>
                    <li> <span className="font-bold">BankAccount</span></li>
                    <li> <span className="font-bold">Phone Number</span></li>
                    <li></li>

                </ul>



            </footer>


        </>
    )
}

export default Footer
>>>>>>> dev
