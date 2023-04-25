import { StarShip } from '../types/Starship'
import { Link } from "react-router-dom";

type StarShipCardProps = {
  starShip: StarShip
}

function StarShipCard({starShip}: StarShipCardProps) {
  return (
    <Link to={`starship/${(starShip.url).split('starships/').pop()}`} className="card" >
    <img
      src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
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