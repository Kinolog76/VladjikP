function ExperienceJob({ post, company, date, stack, description }) {
  return (
    <>
      <div className="work work__box">
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <div className="work__place-box">
          <div className="work__place">
            <span className="work__place-post">{post}</span>
            <span className="work__place-conpany">{company}</span>
          </div>
          <div className="work__date-box">
            <div className="work__date">{date}</div>
          </div>
        </div>
        <div className="work__tech">
          <p>Tech stack:</p>
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="work__resp">
          <p>Responsibilities</p>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceJob;
