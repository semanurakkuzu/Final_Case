import { useEffect, useState } from 'react';
import logo from '../image/starwars_logo.png';
import { useAppDispatch } from '../redux/hooks';
import { setStarShips } from '../redux/starShipsSlice';
import { useQuery } from 'react-query';
import { fetchStarShipSearch } from '../services/starshipService';
import { useDebounce } from 'use-debounce';

function StarShipSearch() {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const [debouncedSearchInputValue] = useDebounce<string>(searchInputValue, 500);

  const {status, data} = useQuery(['ships', debouncedSearchInputValue], () => fetchStarShipSearch(debouncedSearchInputValue));

useEffect(() => {
  if (status === 'success') {
    dispatch(setStarShips(data.results));
  }
}, [data, dispatch, status])

 

  function handleSearchInputChange(event: React.SyntheticEvent<EventTarget>) {
    setSearchInputValue((event.target as HTMLInputElement).value);
  }

  return (
    <div className="container text-center pt-5">
      <img width={300} src={logo} alt="star wars" />
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name or model of starship.."
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default StarShipSearch;
