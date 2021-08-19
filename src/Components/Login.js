import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignupButton>SIGN UP NOW</SignupButton>
                <SignupDescription>
                    Get Premium Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1. 
                </SignupDescription>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('/images/login-background.jpg');
        z-index: -1;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.6;
    }
`

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const CTALogoOne = styled.img`

`

const SignupButton = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: 500;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: all 250ms;
    margin-top: 15px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const SignupDescription = styled.p`
    font-size: 11px;
    letter-spacing: 1.2px;
    text-align: center;
    line-height: 1.5;
    color: #bfbfbf;
`

const CTALogoTwo = styled.img` 
    width: 90%;
    margin-top: 10px;
`