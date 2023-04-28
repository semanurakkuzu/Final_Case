import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faUserGear,
  faBolt,
  faUserGroup,
  faSpaceShuttle,
  faTruckRampBox
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { setStarShip } from '../redux/starShipDetailSlice';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { fetchShip } from '../services/starshipService';
import { starShipImgCodes } from '../starShipImgCodes';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
                <div className="col card-text fs-5">
                  <div>
                    <OverlayTrigger
                      key="1"
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Hyperdrive Rating</Tooltip>}
                    >
                      <span className="fw-semibold">
                        <FontAwesomeIcon icon={faSpaceShuttle} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  <div className="fs-6 mt-2">{starShip.hyperdrive_rating}</div>
                </div>
                <div className="col card-text fs-5">
                  <div>
                    <OverlayTrigger key="1" placement="top" overlay={<Tooltip id={'tooltip-top'}>Passengers</Tooltip>}>
                      <span className="fw-semibold">
                        <FontAwesomeIcon icon={faUserGroup} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  <div className="fs-6 mt-2">{starShip.passengers}</div>
                </div>
                <div className="col card-text fs-5">
                  <div>
                    <OverlayTrigger
                      key="1"
                      placement="top"
                      overlay={<Tooltip id={`tooltip-top`}>Max Atmosphering Speed</Tooltip>}
                    >
                      <span className="fw-semibold">
                        <FontAwesomeIcon icon={faBolt} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  <div className="fs-6 mt-2">{starShip.max_atmosphering_speed}</div>
                </div>
                <div className="col card-text fs-5">
                  <div>
                    <OverlayTrigger key="1" placement="top" overlay={<Tooltip id={`tooltip-top`}>Crew</Tooltip>}>
                      <span className="fw-semibold">
                        <FontAwesomeIcon icon={faUserGear} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  <div className="fs-6 mt-2"> {starShip.crew}</div>
                </div>
                <div className="col card-text fs-5">
                  <div>
                    <OverlayTrigger
                      key="1"
                      placement="top"
                      overlay={<Tooltip id={`tooltip-top`}>Cargo Capacity</Tooltip>}
                    >
                      <span className="fw-semibold">
                        <FontAwesomeIcon icon={faTruckRampBox} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  <div className="fs-6 mt-2">{starShip.cargo_capacity}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StarShipDetail;
