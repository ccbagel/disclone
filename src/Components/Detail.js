import React from 'react';
import styled from "styled-components";

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg"  alt="background"/>
            </Background>
            <ImageTitle>
                <img src="/images/bao.png" alt="movie logo"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"  alt="group watch"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 - 7m - Family - Fantasy - Kids - Animation
            </Subtitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.4;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 20vh;
    min-height: 150px;
    width: 35vw;
    min-width: 200px;
    margin-top: 100px;


    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 120px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    margin-right 22px;
    padding: 0 26px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 46px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
` 

const TrailerButton = styled(PlayButton)`
    padding: 16px;
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    cursor: pointer;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    background-color: rgba(0, 0, 0, 0.6);

    span {
        font-size: 30px;
        color: rgb(249, 249, 249);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
    margin: 0 120px;
    font-weight: bold;
    font-size: 14px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    margin: 10px 120px; 
    width: 600px;
    color: rgb(249, 249, 249);
    font-size: 17px;
    margin-top: 16px;
`
