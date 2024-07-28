import { useEffect } from "react";
import ExperienceJob from "./ExperienceJob";
import ExperienceCourses from "./ExperienceCourses";
import mainBg from "/public/main_bg.webp";
function Experience() {
  useEffect(() => {
    const handleScroll = () => {
      const paralax = document.querySelector(".paralax");
      if (paralax) {
        paralax.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="experience" className="experience">
      <div style={{ backgroundImage: `url(${mainBg})` }} className="paralax"></div>
      <div className="container">
        <h2 className="title">Experience</h2>
        <h3 className="experience_subtitle">Work experience</h3>
        <div className="experience__container">
          <ExperienceJob
            post="Front-End Developer (SEO department)"
            company="Ocean Digital"
            date="2023 Sep – present"
            stack={[
              "JavaScript",
              "Python",
              "HUGO",
              "API",
              "PHP",
              "Laravel",
              "Scrapy",
              "BeautifulSoup4",
              "Selenium",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "Tailwind CSS",
              "Git",
              "Github",
              "Figma",
              "Photoshop",
              "Trello",
            ]}
            description={[
              "Working with the SEO part of the code",
              "Automation tasks (Python)",
              "Web Scrapping ( Python, BS4, Selenium, Scrappy, Requests, working with json, markdown, csv)",
              "Layout of responsive and cross-browser websites of diverse complexity",
              "Creating websites using the HUGO website generator",
              "Operation with websites hosting",
              "Optimizing websites to boost performance and enhance user experience.",
              "Improving and refactoring existing code",
              "Working in the development team",
            ]}
          />
          <ExperienceJob
            post="Front-End Developer"
            company="Outsourcing company 'ZUWEB'"
            date="2023 Jul – 2023 Sep"
            stack={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Bootstrap",
              "WordPress",
              "jQuery",
              "Git",
              "Figma",
              "Photoshop",
              "Trello",
            ]}
            description={[
              "Layout of responsive and cross-browser websites of diverse complexity",
              "Enhancing websites for better performance and user experience",
              "Refactoring existing code",
              "Working in the development team",
            ]}
          />
          <ExperienceJob
            post="Front-End Developer"
            company="weblancer.net"
            date="2023 Mar – 2023 Sep"
            stack={["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Figma", "Photoshop"]}
            description={[
              "Work with various CMS ",
              "Layout of adaptive and cross-browser sites",
              "Making edits, fixing bugs",
            ]}
          />
          <ExperienceJob
            post="Intern HTML Coder"
            company="Web Studio 'FO Fundation'"
            date="2022 Sep – 2022 Dec"
            stack={["HTML5", "CSS3", "Figma", "Photoshop"]}
            description={[
              "Training in layout technologies",
              "Layout of site elements (HTML, CSS)",
              "Working in the development team",
            ]}
          />
        </div>
        <h3 className="experience_subtitle">Courses</h3>
        <div className="experience__container-courses">
          <ExperienceCourses
            name="React - The Complete Guide 2024"
            author="Academind by Maximilian Schwarzmller, Udemy"
          />
          <ExperienceCourses
            name="Master Laravel for Beginners & Intermediate"
            author="Piotr Jura, Udemy"
          />
          <ExperienceCourses name="Front-End Self-Paced Online Program" author="EPAM" />
          <ExperienceCourses name="JavaScript + React" author="Ivan Petrichenko, Udemy" />
          <ExperienceCourses name="CMS WordPress" author="Ivan Petrichenko, Udemy" />
          <ExperienceCourses name="Web Development" author="Ivan Petrichenko, Udemy" />
          <ExperienceCourses name="HTML, CSS Web Development" author="@FreelancerLifeStyle" />
          <ExperienceCourses name="Layout of sites from 0 to 1" author="Vadim Prokopchuk" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
