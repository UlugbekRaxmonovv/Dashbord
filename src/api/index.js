import axios from "axios";

const main_url= axios.create({
    baseURL:'https://tour.touristan-bs.uz/v1'
})

export default main_url;