import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setSignOutState, setUserLoginDetails } from "../redux/slices/userSlice.jsx";


const Header = (props) => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(state => state.user.name);
  const userPhoto = useSelector(state => state.user.photo);
  const userEmail = useSelector(state => state.user.email);

  useEffect(() =>{
    auth.onAuthStateChanged(
      async (user) => {
        if(user){
          setUser(user);
          history("/home");
        }
      } 
    )
  }, [username]);

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }))
  }

  const handleAuth = () => {
    if (username) {
      // Handle logout logic
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
          console.log("User signed out:", userEmail);
        })
        .catch((error) => {
          console.error("Sign-out error:", error.message);
          alert("Failed to sign out. Please try again.");
        });
    } 
    
    else if(!username) {
      // Handle login logic

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("User signed in:", result);
          setUser(result.user);
        })
        .catch((error) => {
          console.error("Sign-in error:", error.message);
          alert("Failed to sign in. Please try again.");
        });
    }

    else{}
  };

 

  return (
    <div>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Disney+" />
        </Logo>

        {
          !username ? 
          <Login onClick={handleAuth}>Login</Login> : 
          <>
            <NavMenu>
          <a href="/home" className="nav-menu-item">
            <img src="/images/home-icon.svg" alt="Home" />
            <span>HOME</span>
          </a>
          <a href="/search" className="nav-menu-item">
            <img src="/images/search-icon.svg" alt="Search" />
            <span>SEARCH</span>
          </a>
          <a href="/watchlist" className="nav-menu-item">
            <img src="/images/watchlist-icon.svg" alt="Watchlist" />
            <span>WATCHLIST</span>
          </a>
          <a href="/originals" className="nav-menu-item">
            <img src="/images/original-icon.svg" alt="Originals" />
            <span>ORIGINALS</span>
          </a>
          <a href="/movies" className="nav-menu-item">
            <img src="/images/movie-icon.svg" alt="Movies" />
            <span>MOVIES</span>
          </a>
          <a href="/series" className="nav-menu-item">
            <img src="/images/series-icon.svg" alt="Series" />
            <span>SERIES</span>
          </a>
        </NavMenu>

        <SignOut>
        <UserImg src={userPhoto} alt={username} />
        <DropDown>
          <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
        </SignOut>
          </>
        }
        
        
      </Nav>
    </div>
  );

  
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgba(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      opacity: 0;
      position: absolute;
      right: 0px;
      left: 0px;
      ${"" /* width: 100% */}
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;
      visibility: hidden;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  font-size: 13px;
  margin-right: 16px;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 9px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  `

const SignOut = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  width: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  ${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`
 
export default Header;
