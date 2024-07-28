import AboutText from "./AboutText";
import AboutPhoto from "./AboutPhoto";
import { styled } from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: unset;
  }
`;

function About() {
  return (
    <div id="about" className="about container">
      <h2 className="title">About me</h2>
      <AboutWrapper>
        <AboutText />
        <AboutPhoto />
      </AboutWrapper>
      <div className="about-experience">
        <div className="about-experience-item">
         <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0178a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Location:</span>
         </div>
          <p>Ukraine, Vinnitsa</p>
        </div>
        <div className="about-experience-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0178a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-book-open">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>Education:</span>
          </div>
          <p>Vinnytsia National Technical University (Bachelor, Master) </p>
        </div>
        <div className="about-experience-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0178a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-globe">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>Languages:</span>
          </div>
          <p>Ukrain, English (Upper-Intermediate), Russian</p>
        </div>
        <div className="about-experience-item">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0178a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Location</span>
          </div>
          <p>Ukraine, Vinnitsa</p>
        </div>
      </div>
    </div>
  );
}

export default About;
