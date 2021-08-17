import React from 'react';
import styled from "styled-components";
import ImageSlider from './ImageSlider.js';
import Viewers from './Viewers.js';

function Home() {
    return (
        <Container>
            <ImageSlider />
            <Viewers />
        </Container>
    )
}

export default Home;
 
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px); 
    position: relative;
    // hide overflow to disable page scrolling on x axis
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center  center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`