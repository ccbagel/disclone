import React, {useEffect} from 'react';
import styled from "styled-components";
import {selectUserName, selectUserPhoto, setUserLogin, setSignout} from "../features/users/userSlice";
import {useSelector, useDispatch} from "react-redux"; 
import {auth, provider} from "../firebase";
import {useHistory} from "react-router-dom";
import NavMenu from "./Navbar";

function  Header() {
    //dispatch for user info
    const dispatch = useDispatch();
    //redirect user to login page when signed out
    const history = useHistory("/");
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
                history.push();
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

    const innerwidth = window.innerWidth;

    return (
        <>
            {
                //if user isn't signed in, show logo and login
                !userName ? 
                <Nav>
                    <Logo src="/images/logo.svg" />
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer>
                </Nav> 
                : <Nav>
                    <Logo src="/images/logo.svg" />
                    {innerwidth > 920 && <NavMenu />}
                    <UserImg onClick={signOut} src={userPhoto} />
                </Nav>

            }
        </>
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

    @media (max-width: 920px) {
        justify-content: space-between;
    }
`
const Logo = styled.img`
    width: 80px;
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