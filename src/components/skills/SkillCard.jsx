function SkillCard({ skill, icon }) {
  return (
    <div className="skill-card">
      <img src={icon} alt={skill} />
      <div className="skill-card-title">{skill}</div>
    </div>
  );
}

export default SkillCard;
