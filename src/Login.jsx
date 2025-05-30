 import React from 'react'
 import styled from 'styled-components' 

 
 const Login = (props) => {
   

   
    return (
      <Container>
        <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
          <SignUp> GET ALL THERE </SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </Description>
        </CTA>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        <BgImage />
        </Content>
      </Container>
    );

    
 }
 
 const Container = styled.section`
   display: flex;
   flex-direction: column;
   height: 100vh;
   text-align: center;
   overflow: hidden;
 `;
 const Content = styled.div`
   ${"" /* margin-bottom: 10vw; */}
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
   padding: 80px 40px;
   height: 100%;
 `;

 const BgImage = styled.div`
   background-image: url("/images/login-background.jpg");
   height: 100%;
   background-position: top;
   background-size: cover;
   background-repeat: no-repeat;
   position: absolute;
   right: 0;
   top: 0;
   left: 0;
   z-index: -1;
 `;

 const CTA = styled.div`
   margin-bottom: 2vw;
   max-width: 650px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 0;
   align-items: center;
   text-align: center;
   margin-right: auto;
   margin-left: auto;
   transition-timing-function: ease-out;
   transition-opacity: 0.2s;
   width: 100%;
 `;

 const CTALogoOne = styled.img`
   margin-bottom: 12px;
   max-width: 600px;
   min-height: 1px;
   display: block;
   width: 100%;
 `;
 const SignUp = styled.button`
   all: unset;
   font-weight: bold;
   color: #f9f9f9;
   background-color: #0063e5;
   font-size: 18px;
   padding: 16.5px 0;
   border: 1px solid trasparent;
   border-radius: 4px;
   width: 100%;
   margin-bottom: 12px;
   letter-spacing: 1.5px;

   &:hover {
     background-color: #0483ee;
     cursor: pointer;
   }
 `;

 const Description = styled.p`
   color: hsla(0, 0%, 95.3%, 1);
   font-size: 11px;
   margin: 0 0 24px;
   line-height: 1.5em;
   letter-spacing: 1.5px;
 `;

 const CTALogoTwo = styled.img`
   max-width: 600px;
   margin-bottom: 20px;
   display: inline-block;
   vertical-align: bottom;
   width: 100%;
 `;
 
 export default Login
 