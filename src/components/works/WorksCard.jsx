import git from "/public/work/icons/git.svg";
import link from "/public/work/icons/link.svg";

function WorksCard({ name, img, site, github }) {
  return (
    <div className="works-card">
      <span>{name}</span>
      <div className="works-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="works-card-links">
        <a href={github} target="_blank">
          <img src={git} alt="" />
        </a>
        {site && (
          <a href={site} target="_blank">
            <img src={link} alt="" />
          </a>
        )}
      </div>
    </div>
  );
}

export default WorksCard;
