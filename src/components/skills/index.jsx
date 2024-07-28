import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
            <SkillCard skill="JavaScript" icon="/tech_icons/js.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="React" icon="/tech_icons/react.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Python" icon="/tech_icons/python.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="PHP" icon="/tech_icons/php.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Hugo Go framework" icon="/tech_icons/hugo.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="HTML 5" icon="/tech_icons/html.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="CSS 3" icon="/tech_icons/css.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="SEO" icon="/tech_icons/seo.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="API" icon="/tech_icons/api.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Git" icon="/tech_icons/git.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="SCSS" icon="/tech_icons/scss.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Bootstrap" icon="/tech_icons/bootstrap.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Tailwind CSS" icon="/tech_icons/tailwind.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="BeautifulSoup4" icon="/tech_icons/bs4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="Selenium" icon="/tech_icons/se.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SkillCard skill="NPM" icon="/tech_icons/npm.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
