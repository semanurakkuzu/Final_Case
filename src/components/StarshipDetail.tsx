import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { setStarShip } from '../redux/starShipDetailSlice';
import { useParams } from "react-router";
import { useQuery } from 'react-query';
import { fetchShip } from '../services/starshipService';

function StarShipDetail() {
const {id} = useParams()

const dispatch = useAppDispatch();

const {data, status} = useQuery(['ship', id], () => 
fetchShip(id))


useEffect(() => {
  if (status === 'success') {
    dispatch(setStarShip(data));
  }
}, [data, status, dispatch])


const starShip = useAppSelector((state) => state.starshipDetail.starShip);

  return (
    <div className="theme-dark">
      <div className="container pt-5">
       {starShip &&
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
            <p className="card-title fs-1 text-center my-4">{starShip.name}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Model: </span>
                  <span>{starShip.model}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Hyperdrive Rating: </span>
                  <span>{starShip.hyperdrive_rating}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Passengers: </span>
                  <span>{starShip.passengers}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Max Atmospering Speed: </span>
                  <span>{starShip.max_atmosphering_speed}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Manufacturer: </span>
                  <span>{starShip.manufacturer}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Crew: </span>
                  <span>{starShip.crew}</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Cargo Capacity: </span>
                  <span>{starShip.cargo_capacity}</span>
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
