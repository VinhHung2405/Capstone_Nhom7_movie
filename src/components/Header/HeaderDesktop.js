import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationType, useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
  let navigate = useNavigate(); // điều hướng trang
  let { info } = useSelector((state) => state.userReducer);
  let handleLogout = () => {
    /**
     * 1. đá ra trang chủ
     * 2. clear localStorage
     */

    window.location.href = "/";
    localStorage.clear(); // xoá toàn bộ localStorage
  };
  let renderUserNav = () => {
    if (info) {
      return (
        <div className="mr-20">
          <span className="mr-10">{info.hoTen}</span>
          <button onClick={handleLogout} className="btn-theme mr-20">
            Logout
          </button>
        </div>
      );
    }
    
    return (
      <>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn-theme"
          style={scrollY < 50 ? {text: '#000'} : {backgroundColor: '#fff'}}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="btn-theme"
          style={scrollY < 50 ? {text: '#000'} : {backgroundColor: '#fff'}}
        >
          Register
        </button>
      </>
    );
  };
  const [ scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY)
  }
  useEffect (() =>{
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return() => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, [])
  return (
      <Navigation className=" shadow-lg z-50" style={scrollY < 50 ? {backgroundColor: '#fff'} : {backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <div className="container flex justify-between items-center h-20">
        <span
          className="text-5xl text-red-500 cursor-pointer font-extrabold"
          onClick={() => {
            navigate("/");
          }}
        >
          B-Flix
        </span>
        <nav
         className="space-x-5">
          {renderUserNav()}
        </nav>
      </div>
    </Navigation>
  );
}

const Navigation = styled.div`
  position : fixed;
  width: 100%;
  height: 80px;
  transition: all .5s;
`
