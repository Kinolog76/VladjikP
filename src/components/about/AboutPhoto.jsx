import photo from "/public/main_photo.png";

function AboutPhoto() {
  return (
    <div className="about__photo">
      <img src={photo} alt="Фотография" />
    </div>
  );
}

export default AboutPhoto;
