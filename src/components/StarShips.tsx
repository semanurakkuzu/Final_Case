import { useAppSelector } from '../redux/hooks';
import { StarShip } from '../types/Starship';
import StarShipSearch from './StarShipSearch';
import StarShipCard from './StarShipCard';

export default function StarShips() {
  const starShips = useAppSelector((state) => state.starships.starShipData);

  return (
    <>
      <div className="theme-dark">
        <div className="container-fluid">
          <StarShipSearch></StarShipSearch>
          <div className="row justify-content-center mt-5">
            {starShips &&
              starShips.map((starShip: StarShip, key: number) => (
                <div key={key} className="col-auto mb-4">
                  <StarShipCard starShip={starShip} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
