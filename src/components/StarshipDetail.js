import React from 'react'

function StarshipDetail() {
  return (
    <div className="theme-dark">
      <div className="container pt-5">
          <div className="card mx-auto cardDetail py-2 border border-5">
            <div className="ms-3">
              <button className="btn btn-primary">Back</button>
            </div>

            <div className="card-body text-center">
              <img
                src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
                className="rounded"
                alt="starship"
                width={400}
                height={300}
              />
              <p className="card-title fs-1 text-center my-4">
                Star Destroyer
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Model: </span>
                    <span>CR-90 corvette</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Hyperdrive Rating: </span>
                    <span>2.0</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Passengers: </span>
                    <span>75</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Max Atmospering Speed: </span>
                    <span>1000</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Manufacturer: </span>
                    <span>Sinear Fleet Systems, Cyngus Spaceworks</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="card-text fs-4">
                    <span className="fw-semibold">Crew: </span>
                    <span>5</span>
                  </div>
                </li>
                <li class="list-group-item">
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
