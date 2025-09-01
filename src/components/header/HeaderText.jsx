import { styled } from "styled-components";
import { useRef, useEffect } from "react";
const HeaderLogo = styled.div`
  position: relative;
  font-size: 36px;
  font-weight: 500;
  position: relative;
  color: #5eead4;
  padding: 0 3px 0 3px;
  font-family: "Handjet", cursive;
`;
const texts = ["Front-End Developer", "Vladyslav"];
function HeaderText() {
  const typingTextRef = useRef("");
  const currentIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const headerLogoRef = useRef(null);

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndexRef.current];
      typingTextRef.current += currentText[charIndexRef.current];

      if (headerLogoRef.current) {
        headerLogoRef.current.textContent = typingTextRef.current;
      }

      if (charIndexRef.current < currentText.length - 1) {
        charIndexRef.current += 1;
        setTimeout(typeText, 230);
      } else {
        setTimeout(deleteText, 3000);
      }
    };

    const deleteText = () => {
      if (charIndexRef.current >= 0) {
        typingTextRef.current = typingTextRef.current.slice(0, -1);

        if (headerLogoRef.current) {
          headerLogoRef.current.textContent = typingTextRef.current;
        }

        charIndexRef.current -= 1;
        setTimeout(deleteText, 100);
      } else {
        if (currentIndexRef.current < texts.length - 1) {
          currentIndexRef.current += 1;
        } else {
          currentIndexRef.current = 0;
        }
        charIndexRef.current = 0;
        typingTextRef.current = "";
        setTimeout(typeText, 500);
      }
    };

    typeText();
  }, []);
  return <HeaderLogo className="header-logo" ref={headerLogoRef}></HeaderLogo>;
}

export default HeaderText;
