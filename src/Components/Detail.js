import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom"; 
import db from "../firebase";

function Detail() {
    //grab id from rrd path to show correct movie background
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        //grab movie info from the db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            //check if doc exists
            if(doc.exists) {
                //set movie info to state
                setMovie(doc.data());
            } else {
                //redirect to home
            }
        })
    },[]);

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.backgroundImg} />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} />
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
                        {movie.subTitle}
                    </Subtitle>
                    <Description>
                        {movie.description}
                    </Description>
                </> 
            )} 
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    //vh scrolls pg down 
    min-height: calc(70vh - 70px);
    padding: 0 calc(3.5vw + 5px); 
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        margin-top: 50px;
    }
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

    @media (max-width: 768px) {
        img {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        opacity: 0.6;
        }
    }

`

const ImageTitle = styled.div`
    height: 23vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 120px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin: 50px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;    
    }
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

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 5px auto;
    }
` 

const TrailerButton = styled(PlayButton)`
    padding: 16px;
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 5px auto;
    }
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

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 5px auto;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

    @media (max-width: 768px) {
        display: none;
    }
`

const Subtitle = styled.div`
    margin: 0 120px;
    font-weight: bold;
    font-size: 14px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    @media (max-width: 800px) {
        text-align: left;
        width: 100%;
        margin-left: 0;
        letter-spacing: 1px;
    }
`

const Description = styled.div`
    margin: 10px 120px; 
    width: 600px;
    color: rgb(249, 249, 249);
    font-size: 17px;
    margin-top: 16px;

    @media (max-width: 780px) {
        text-align: left;
        width: 100%;
        margin: 20px auto;
        margin-left: 0;
        letter-spacing: 1px;
        line-height: 1.5;
    }
`
