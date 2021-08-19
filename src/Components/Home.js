import React, {useEffect} from 'react';
import styled from "styled-components";
import ImageSlider from './ImageSlider.js';
import Viewers from './Viewers.js';
import Movies from './Movies.js';
import db from '../firebase';
import {useDispatch} from 'react-redux';
import {setMovies} from '../features/movie/movieSlice';

function Home() {
    const dispatch = useDispatch();
    //capture snapshots of data from db and unpack 
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            dispatch(setMovies(tempMovies));
        })
    }, []);

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
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