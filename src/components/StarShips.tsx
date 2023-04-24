import React from 'react'
import { useQuery } from 'react-query'
import logo from '../image/starwars_logo.png'

export default function StarShips() {
  const query = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query')
      .then((res) => res.json())
  )

  console.log(query.data)

  return (
    <>
      <div className="theme-dark">
        <div className="container-fluid">
          <div className="container text-center pt-5">
            <img width={300} src={logo} alt="star wars" />
            <div className="row justify-content-center mt-5">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name or Model"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-auto mb-4">
              <div className="card">
                <img
                  src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
                  className="rounded card-img-top cardImg"
                  alt="starship"
                />
                <div className="card-body">
                  <p className="card-title fs-2 fw-bolder text-center my-3 ">
                    Star Destroyer
                  </p>
                  <div className="card-text fs-5">
                    <span className="fw-semibold">Model: </span>
                    <span>CR-90 corvette</span>
                  </div>
                  <div className="card-text fs-5">
                    <span className="fw-semibold">Hyperdrive Rating: </span>
                    <span>2.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
