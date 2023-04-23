import React from 'react'
import logo from './image/starwars_logo.png'
function Starships() {
  return (
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
  )
}

export default Starships