function ExperienceCourses({ name, author }) {
  return (
    <>
      <div className="cr__box">
        <div className="cr__name-box">
          <div className="cr__name">{name}</div>
          <div className="cr__author">{author}</div>
        </div>
      </div>
    </>
  );
}

export default ExperienceCourses;
