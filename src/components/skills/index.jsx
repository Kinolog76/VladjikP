import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jsIcon from "/public/tech_icons/js.png";
import reactIcon from "/public/tech_icons/react.png";
import pythonIcon from "/public/tech_icons/python.png";
import phpIcon from "/public/tech_icons/php.png";
import hugoIcon from "/public/tech_icons/hugo.png";
import htmlIcon from "/public/tech_icons/html.png";
import cssIcon from "/public/tech_icons/css.png";
import seoIcon from "/public/tech_icons/seo.png";
import apiIcon from "/public/tech_icons/api.png";
import gitIcon from "/public/tech_icons/git.png";
import scssIcon from "/public/tech_icons/scss.png";
import bootstrapIcon from "/public/tech_icons/bootstrap.png";
import tailwindIcon from "/public/tech_icons/tailwind.png";
import bs4Icon from "/public/tech_icons/bs4.webp";
import seleniumIcon from "/public/tech_icons/se.png";
import npmIcon from "/public/tech_icons/npm.png";

import "swiper/css/scrollbar";

function Skills() {
  return (
    <div
      style={{
        backgroundImage: "url(/public/ed_bg.svg)",
        boxShadow: "inset 0 0 100px 0 #00bfff38, 0 0 100px 0 #00bfff38",
      }}
      id="skills"
      className="skills">
      <div className="skills container">
        <h2 className="title">Skills</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            525: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            915: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}>
          <SwiperSlide>
            <SkillCard skill="JavaScript" icon={jsIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="React" icon={reactIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Python" icon={pythonIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="PHP" icon={phpIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Hugo Go framework" icon={hugoIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="HTML 5" icon={htmlIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="CSS 3" icon={cssIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="SEO" icon={seoIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="API" icon={apiIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Git" icon={gitIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="SCSS" icon={scssIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Bootstrap" icon={bootstrapIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Tailwind CSS" icon={tailwindIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="BeautifulSoup4" icon={bs4Icon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Selenium" icon={seleniumIcon} />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="NPM" icon={npmIcon} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
