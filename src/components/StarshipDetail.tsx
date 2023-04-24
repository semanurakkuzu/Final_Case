import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
function StarshipDetail() {
  return (
    <div className="theme-dark">
      <div className="container pt-5">
        <div className="card mx-auto detailCard py-2">
          <div className="ms-3">
            <button className="btn fs-3">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
          </div>
          <div className="card-body text-center">
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
              className="rounded detailCardImg card-img"
              alt="starship"
              
            />
            <p className="card-title fs-1 text-center my-4">Star Destroyer</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Model: </span>
                  <span>CR-90 corvette</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Hyperdrive Rating: </span>
                  <span>2.0</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Passengers: </span>
                  <span>75</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Max Atmospering Speed: </span>
                  <span>1000</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Manufacturer: </span>
                  <span>Sinear Fleet Systems, Cyngus Spaceworks</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Crew: </span>
                  <span>5</span>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-text fs-4">
                  <span className="fw-semibold">Cargo Capacity: </span>
                  <span>180000</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarshipDetail
