import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Link from "next/link";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();
  const menuLinks = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
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
        backgroundColor: "rgb(1, 1, 1)",
      })
      .to(menuLinks.current, {
        visibility: "visible",
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
`;

const NavContent = styled.ul`
  list-style: none;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  left: 5rem;
  z-index: 10;
  visibility: hidden;
`;

const NavItem = styled.li`
  padding: 1rem 0;
  font-size: 1.6rem;
  z-index: 10;
`;
