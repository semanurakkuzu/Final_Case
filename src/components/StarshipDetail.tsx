import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import { useQuery } from 'react-query';
import { fetchShip } from '../services/starshipService';

function StarShipDetail() {

const {id} = useParams()

const {data} = useQuery(['ships', id], () => 
fetchShip(id))



  return (
    <div className="theme-dark">
      <div className="container pt-5">
       {data &&
       <div className="card mx-auto detailCard py-2">
          <div className="ms-3">
            <Link to='/' className="color-dark fs-3">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            </Link>
          </div>
          <div className="card-body text-center">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
              className="rounded detailCardImg card-img"
              alt="starship"
              
            />
            <p className="card-title fs-1 text-center my-4">{data.name}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Model: </span>
                  <span>{data.model}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Hyperdrive Rating: </span>
                  <span>{data.hyperdrive_rating}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Passengers: </span>
                  <span>{data.passengers}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Max Atmospering Speed: </span>
                  <span>{data.max_atmosphering_speed}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Manufacturer: </span>
                  <span>{data.manufacturer}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Crew: </span>
                  <span>{data.crew}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Cargo Capacity: </span>
                  <span>{data.cargo_capacity}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default StarShipDetail
