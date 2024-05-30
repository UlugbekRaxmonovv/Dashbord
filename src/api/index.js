import axios from "axios";

const main_url= axios.create({
    baseURL:'https://tour.touristan-bs.uz/v1'
})

main_url.interceptors.request.use((req) => {
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTc3NjYyNzIsImlhdCI6MTcxNzA0NjI3MiwiaXNzIjoiIiwicm9sZSI6InN1ZG8iLCJzdWIiOiIyZTljYTI3Ni01Nzk5LTRmMzQtYTBhNi05MzhmN2IwYTVjOGQifQ.2BANpQ3ZAPfb0G2P3VHkm4JjCsOTQIk5h8B2U0WJt9Y"

    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  });
export default main_url;