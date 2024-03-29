import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { useCartContext } from "../context/Cartcontext";
import { Button } from "../Styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { total_item } = useCartContext();
  const [menuIcon, setmenuIcon] = useState();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <Wrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <Link
              to="/"
              className="navbar-link"
              onClick={() => setmenuIcon(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="navbar-link"
              onClick={() => setmenuIcon(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="navbar-link"
              onClick={() => setmenuIcon(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="navbar-link"
              onClick={() => setmenuIcon(false)}
            >
              Contact
            </Link>
          </li>
          {isAuthenticated && <p className="user-login--name">{user.name}</p>}
          {isAuthenticated ? (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>{" "}
            </li>
          )}
          <li>
            <Link
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setmenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">
                {!total_item ? 0 : total_item}
              </span>
            </Link>
          </li>
        </ul>
        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <IoMenuSharp
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setmenuIcon(true)}
          />
          <IoCloseSharp
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setmenuIcon(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-transform: capitalize;
    font-size: 1.4rem;
  }

  .user-logout,
  .user-login {
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 0s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
export default Nav;
