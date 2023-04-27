import React, { useEffect, useState } from 'react';
import logo from '../image/starwars_logo1.png';
import { useAppSelector } from '../redux/hooks';
import { useAppDispatch } from '../redux/hooks';
import { setStarShips } from '../redux/starShipsSlice';
import { StarShip } from '../types/Starship';
import { useInfiniteQuery } from 'react-query';
import { fetchStarShipList } from '../services/starshipService';
import StarShipCard from './StarShipCard';
import { useDebounce } from 'use-debounce';
import yoda from '../image/yoda.png'

export default function StarShips() {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const [debouncedSearchInputValue] = useDebounce<string>(searchInputValue, 500);

  const {
    data,

    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery(
    ['ships', debouncedSearchInputValue],

    ({ pageParam }) => fetchStarShipList(debouncedSearchInputValue, pageParam),
    {
      getNextPageParam: (lastPages, pages) => {
        if ( lastPages.next === null) {
          return;
        }

        return pages.length + 1;
      }
    }
  );
  console.log(data)

  useEffect(() => {
    if (status === 'success') {
      dispatch(setStarShips(data));
    }
  }, [data, dispatch, status]);

  function handleSearchInputChange(event: React.SyntheticEvent<EventTarget>) {
    setSearchInputValue((event.target as HTMLInputElement).value);
  }
  const starShips = useAppSelector((state) => state.starships.starShipData);

  return (
    <>
      <div className="theme-dark">
        <div className="container-fluid">
          <div className="container text-center pt-3">
            <img width={500} src={logo} alt="star wars" />
            <div className="row justify-content-center mt-5">
              <div className="col-6">
                <img src={yoda} alt='baby yoda'/>
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
            <button className="btn btn-light" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
            </button>
          </div>
          <div className=''>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </div>
      </div>
    </>
  );
}
