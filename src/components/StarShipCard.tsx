import { StarShip } from '../types/Starship'
import { Link } from "react-router-dom";
import { starShipImgCodes } from '../starShipImgCodes';

type StarShipCardProps = {
  starShip: StarShip
  
}
function StarShipCard({starShip}: StarShipCardProps) {
  const urlParts = starShip.url.split('starships/')
  const id = Number(urlParts[urlParts.length - 1].slice(0, -1))

  const starShipCode = starShipImgCodes[id ?? 0]

  return (
    <Link to={`starship/${id}`} className="card bg-dark text-white bg-alpha" >
   {
    
   } <img src={starShipCode.icon}
      className="rounded card-img-top cardImg"
      alt="starship"
    />
    <div className="card-body">
      <p className="card-title fs-2 fw-bolder text-center my-3 ">
        {starShip.name}
      </p>
      <div className="card-text fs-5">
        <span className="fw-semibold">Model: </span>
        <span>{starShip.model}</span>
      </div>
      <div className="card-text fs-5">
        <span className="fw-semibold">Hyperdrive Rating: </span>
        <span>{starShip.hyperdrive_rating}</span>
      </div>
    </div>
  </Link>
  )
}

export default StarShipCard