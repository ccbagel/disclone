import React, {useEffect} from 'react';
import styled from "styled-components";
import {selectUserName, selectUserPhoto, setUserLogin, setSignout} from "../features/users/userSlice";
import {useSelector, useDispatch} from "react-redux"; 
import {auth, provider} from "../firebase";
import {useHistory} from "react-router-dom";

function  Header() {
    //dispatch for user info
    const dispatch = useDispatch();
    //redirect user to login page when signed out
    const history = useHistory();
    //get user info
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    //keep user state on refresh
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
            }
        })
    },[]);

    //get user data from google auth
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                // set data in the store
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
            })
    };

        //get user data from google auth
        const signOut = () => {
            auth.signOut()
                .then(() => {
                    dispatch(setSignout());
                    history.push("/login");
                })

        };

    // const innerwidth = window.innerWidth;

    return (
       <Nav>
            <Logo src="/images/logo.svg" />
            {!userName ? 
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer> :
            
                (<>
                    <NavMenu>
                        <>{window.innerWidth <= 920 && 
                        <>
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
                        </>
                        }</>   
                    </NavMenu>
                    <UserImg onClick={signOut} src={userPhoto} />
                </>)
            }
        </Nav> 
    )
}


export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`
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
`

const UserImg = styled.img`
  width: 49px;
  height:  46px;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  &:hover {
    cursor: pointer;
    border: 2px solid;
    border-color: #f9f9f9;
  }
`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.div`
    border: 2px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover {
        cursor: pointer;
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        transition: all 0.2s ease 0s;
    }
`


                /* <a>
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
                </a>  */

/* 
             <Nav>
                <Logo src="/images/logo.svg" />
                {!userName ? 
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer> :
                
           (<>
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
                    <UserImg 
                        onClick={signOut}
                        src={userPhoto}
                    />
                </>)
                }
            </Nav> */