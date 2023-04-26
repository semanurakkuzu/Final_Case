import axios from 'axios';

const starShipEndPoint = 'https://swapi.dev/api/starships/';

export const fetchStarShipList = async (searchInputValue: string, pageParam = 1) => {
  const { data } = await axios.get(`${starShipEndPoint}?search=${searchInputValue}&page=${pageParam}`);

  return data;
};

export const fetchShip = async (id: string | undefined) => {
  const { data } = await axios.get(`${starShipEndPoint}${id}`);

  return data;
};
