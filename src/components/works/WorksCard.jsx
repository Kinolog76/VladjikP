function WorksCard({ name, img, site, github }) {
  return (
    <div className="works-card">
      <span>{name}</span>
      <div className="works-card-img">
        <img src={img} alt={name} />
      </div>
      <div className="works-card-links">
        <a href={github} target="_blank">
          <img src="/public/work/icons/git.svg" alt="" />
        </a>
        {site && (
          <a href={site} target="_blank">
            <img src="/public/work/icons/link.svg" alt="" />
          </a>
        )}
      </div>
    </div>
  );
}

export default WorksCard;
