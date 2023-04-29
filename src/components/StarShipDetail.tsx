import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faUserGear,
  faBolt,
  faUserGroup,
  faSpaceShuttle,
  faTruckRampBox
} from '@fortawesome/free-solid-svg-icons';
import { setStarShip } from '../redux/starShipDetailSlice';
import { fetchShip } from '../services/starshipService';
import { starShipImgCodes } from '../starShipImgCodes';
import StarShipFeature from './StarShipFeature';

function StarShipDetail() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { data, status } = useQuery(['ship', id], () => fetchShip(id));

  useEffect(() => {
    if (status === 'success') {
      dispatch(setStarShip(data));
    }
  }, [data, status, dispatch]);

  const starShip = useAppSelector((state) => state.starshipDetail.starShip);

  const starShipCode = starShipImgCodes[id ? Number(id) : 0];

  return (
    <div className="theme min-vh-100">
      <div className="container pt-5">
        {starShip && (
          <div className="card mx-auto text-center py-2 ship-detail-card">
            <div className="ms-3">
              <Link to="/" className="float-start fs-3 back-button-color">
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Link>
            </div>
            <p className="card-title text-color fs-2 my-4">{starShip.name}</p>
            <div className="card-body">
              <div className="d-block rounded-circle mx-auto mb-3 ship-detail-card-img-container">
                <img src={starShipCode.icon} className="ship-detail-card-img" alt="starship" />
              </div>
              <div className="row">
                <div className="col card-text fs-6">
                  <div className="fw-semibold">Model</div>
                  <span>{starShip.model}</span>
                </div>
                <div className="col card-text fs-6">
                  <div className="fw-semibold">Manufacturer</div>
                  <span>{starShip.manufacturer}</span>
                </div>
              </div>
              <div className="row mt-5">
              <StarShipFeature title={"Hyperdrive Rating"} icon={faSpaceShuttle} feature={starShip.hyperdrive_rating}/>
              <StarShipFeature title={"Passengers"} icon={faUserGroup} feature={starShip.passengers}/>
              <StarShipFeature title={"Max Atmosphering Speed"} icon={faBolt} feature={starShip.max_atmosphering_speed}/>
              <StarShipFeature title={"Crew"} icon={faUserGear} feature={starShip.crew} />
              <StarShipFeature title={"Cargo Capacity"} icon={faTruckRampBox} feature={starShip.cargo_capacity}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StarShipDetail;
