import { StarShip } from '../types/Starship';
import { Link } from 'react-router-dom';
import { starShipImgCodes } from '../starShipImgCodes';

type StarShipCardProps = {
  starShip: StarShip;
};
function StarShipCard({ starShip }: StarShipCardProps) {
  const urlParts = starShip.url.split('starships/');
  const id = Number(urlParts[urlParts.length - 1].slice(0, -1));

  const starShipCode = starShipImgCodes[id ?? 0];

  return (
    <Link to={`starship/${id}`} className="card text-center text-white text-decoration-none ship-card">
      <div className="card-body">
        <div className="rounded-circle d-block mx-auto ship-card-img-container">
          <img src={starShipCode.icon} className="ship-card-img" alt="starship" />
        </div>
        <p className="card-title fs-4 fw-bolder mt-3">{starShip.name}</p>

        <div className="card-text fs-6 mt-2">
          <div className="fw-semibold">Model</div>
          <span>{starShip.model}</span>
        </div>
        <div className="card-text fs-6 mt-3">
          <div className="fw-semibold ">Hyperdrive Rating </div>
          <span>{starShip.hyperdrive_rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default StarShipCard;
