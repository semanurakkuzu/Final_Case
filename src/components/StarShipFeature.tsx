import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type StarShipFeaturesProps = {
    title: String,
    icon: IconProp,
    feature: String
  };

function StarShipFeatures({title, icon, feature}:StarShipFeaturesProps) {
  return (
    <div className="col card-text fs-5">
        <div>
        <OverlayTrigger
            key="1"
            placement="top"
            overlay={<Tooltip id="tooltip-top">{title}</Tooltip>}
        >
            <span className="fw-semibold">
            <FontAwesomeIcon icon={icon} />
            </span>
        </OverlayTrigger>
        </div>
    <div className="fs-6 mt-2">{feature}</div>
  </div>
  )
}

export default StarShipFeatures