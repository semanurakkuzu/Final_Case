import axios from "axios"

const starShipEndPoint = 'https://swapi.dev/api/starships/'

export const fetchStarShipList = async() => {
    const {data} = await axios.get(starShipEndPoint)

    return data;
}

export const fetchStarShipSearch = async(searchInputValue: string) => {
    const { data } = await axios.get(`${starShipEndPoint}?search=${searchInputValue}`)

    return data;
}