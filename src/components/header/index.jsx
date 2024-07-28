import ParticleBg from "../ParticleBg";
import HeaderText from "./HeaderText";
import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";

const HeaderWrapper = styled.header`
  position: relative;
  height: 150px;
  z-index: 100;
  box-shadow: 0 0 40px 5px #00bfff6b;
  @media (max-width: 991px) {
    height: 120px;
  }
  @media (max-width: 768px) {
    height: 100px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <ParticleBg className="bg-header-particle" />
      <div className="header container">
        <a href="https://kinolog76.github.io/VladjikP/">
          <HeaderText />
        </a>
        <HeaderMenu />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
