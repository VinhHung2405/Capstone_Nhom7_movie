import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        <>
          <span>{info.hoTen}</span>
          <button onClick={handleLogout} className="btn-theme">
            Logout
          </button>
        </>
      );
    }
    
    return (
      <>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn-theme"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="btn-theme"
        >
          Register
        </button>
      </>
    );
  };
  return (
    <div className="shadow-lg">
      <div className="container flex justify-between items-center  h-20">
        <span
          className="text-5xl text-red-500 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          B-Flix
        </span>
        <nav className="space-x-5">
          {renderUserNav()}
        </nav>
      </div>
    </div>
  );
}

