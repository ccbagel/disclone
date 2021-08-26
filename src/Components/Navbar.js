import React from 'react';
import styled from 'styled-components';

function Navbar() {
    return (
        <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="homepage" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="search" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="homepage" />
                    <span>ORIGINALS</span>
                </a>
                <a> 
                    <img src="/images/movie-icon.svg" alt="homepage" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="homepage" />
                    <span>SERIES</span>
                </a>  
        </NavMenu>
    );
}

export default Navbar;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 60px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
             height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            margin: 0 5px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute; 
                right: 0;
                left: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;