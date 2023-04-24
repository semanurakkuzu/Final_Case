import axios from "axios"
export const fetchStarShipList = async() => {
    const {data} = await axios.get('')

    return data;
}