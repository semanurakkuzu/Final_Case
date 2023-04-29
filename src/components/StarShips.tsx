import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { useAppDispatch } from '../redux/hooks';
import { useInfiniteQuery } from 'react-query';
import { useDebounce } from 'use-debounce';
import { setStarShips } from '../redux/starShipsSlice';
import { fetchStarShipList } from '../services/starshipService';
import { StarShip } from '../types/Starship';
import StarShipCard from './StarShipCard';
import yoda from '../image/yoda.png';
import logo from '../image/starwars_logo.png';

export default function StarShips() {
  const dispatch = useAppDispatch();

  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const [debouncedSearchInputValue] = useDebounce<string>(searchInputValue, 500);

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['ships', debouncedSearchInputValue],

    ({ pageParam }) => fetchStarShipList(debouncedSearchInputValue, pageParam),
    {
      getNextPageParam: (lastPages, pages) => {
        if (lastPages.next === null) {
          return;
        }

        return pages.length + 1;
      }
    }
  );

  useEffect(() => {
    if (status === 'success') {
      dispatch(setStarShips(data));
    }
  }, [data, dispatch, status]);

  const handleSearchInputChange = (event: React.SyntheticEvent<EventTarget>) => {
    setSearchInputValue((event.target as HTMLInputElement).value);
  }

  const starShips = useAppSelector((state) => state.starships.starShipData);

  return (
    <>
      <div>
        {isFetching && !isFetchingNextPage ? (
          <div className="m-0 p-0 fs-2 d-flex position-fixed justify-content-center align-items-center text-white vw-100 vh-100 loading">
            Loading...
          </div>
        ) : null}
      </div>
      <div className="theme min-vh-100">
        <div className="container-fluid">
          <div className="container text-center pt-3">
            <img className="logo" src={logo} alt="star wars" />
            <div className="text-center mt-5">
              <img className="img-yoda" src={yoda} alt="baby yoda" />
              <input
                type="text"
                className="form-control mx-auto input-width"
                placeholder="Enter name or model of starship.."
                value={searchInputValue}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            {starShips &&
              starShips.pages?.map((group, i) => (
                <React.Fragment key={i}>
                  {group.results?.map((starShip: StarShip, i: number) => (
                    <div className="col-auto mb-4" key={i}>
                      <StarShipCard starShip={starShip} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-light"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
