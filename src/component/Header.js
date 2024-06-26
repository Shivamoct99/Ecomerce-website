import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <MainHeader>
      <Link to="/">
        <img className="logo" src="./images/logo.png" alt="" />
      </Link>
      <Nav />
    </MainHeader>
  );
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    width: 15rem;
    height: 5rem;
  }
`;

export default Header;
