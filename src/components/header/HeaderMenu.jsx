import { styled } from "styled-components";
import { useState, useEffect } from "react";

const HeaderMenuBox = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
`;

const HeaderMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px 10px;
  transition: right 0.3s ease;

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: start;
    position: fixed;
    padding-top: 20px;
    top: 100px;
    height: 100vh;
    border-left: 1px solid #fff;
    background: rgb(0, 103, 137);
    background: linear-gradient(180deg, rgb(2 42 55) 0%, rgba(3, 12, 19, 1) 100%);
    width: 100%;
    max-width: 320px;
    top: 120px;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-320px")};
  }
  @media (max-width: 768px) {
    top: 100px;
  }
  @media (max-width: 375px) {
    max-width: 100%;
    border-left: none;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  }
`;

const BurgerButton = styled.button`
  display: none;
  @media (max-width: 950px) {
    display: block;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;

function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("hidden", isOpen);
  }, [isOpen]);

  return (
    <HeaderMenuBox>
      <BurgerButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</BurgerButton>
      <HeaderMenuList $isOpen={isOpen}>
        <li>
          <a className="menu-item" onClick={() => setIsOpen(!isOpen)} href="#about">
            About
          </a>
        </li>
        <li>
          <a className="menu-item" onClick={() => setIsOpen(!isOpen)} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu-item" onClick={() => setIsOpen(!isOpen)} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="menu-item" onClick={() => setIsOpen(!isOpen)} href="#portfolio">
            Portfolio
          </a>
        </li>
      </HeaderMenuList>
    </HeaderMenuBox>
  );
}

export default HeaderMenu;
