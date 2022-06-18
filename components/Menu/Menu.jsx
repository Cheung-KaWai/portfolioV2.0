import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();
  const menuLinks = useRef();
  const hamburger = useRef();
  const cross = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(hamburger.current, {
        opacity: 0,
        duration: 0.2,
      })
      .to(menuRef.current, {
        width: "200vw",
        height: "200vw",
        top: 0,
        right: 0,
        borderRadius: 0,
        duration: 1,
        ease: "slow(0.7, 0.7, false)",
      })
      .to(menuRef.current, {
        backgroundColor: "rgb(20, 20, 20)",
      })
      .to(menuLinks.current, {
        visibility: "visible",
      })
      .to(cross.current, {
        opacity: 1,
        duration: 0.2,
      });
  }, []);

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <NavContainer ref={menuRef} onClick={toggleMenu}>
        <Hamburger hamburger={hamburger} cross={cross} />
        <NavContent ref={menuLinks}>
          <NavItem>
            <Link href="#home">
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#about">
              <a>About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#articles">
              <a>Articles</a>
            </Link>
          </NavItem>
        </NavContent>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  display: block;
  border-radius: 50%;
  background-color: rgba(1, 1, 1, 0.3);
  transform-origin: center;
  overflow: hidden;
  z-index: 5;
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.3);
`;

const NavContent = styled.ul`
  list-style: none;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  left: 5rem;
  visibility: hidden;
`;

const NavItem = styled.li`
  padding: 1rem 0;

  a {
    font-size: 2.4rem;
  }
`;
