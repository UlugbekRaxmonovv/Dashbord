import axios from "axios";

const main_url= axios.create({
    baseURL:'https://tour.touristan-bs.uz/v1'
})

main_url.interceptors.request.use((req) => {
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTg0ODczODQsImlhdCI6MTcxNzc2NzM4NCwiaXNzIjoiIiwicm9sZSI6InN1ZG8iLCJzdWIiOiIyZTljYTI3Ni01Nzk5LTRmMzQtYTBhNi05MzhmN2IwYTVjOGQifQ.AD1xKyrEGKhWmH8PlqCq36IWuJS73-6ZclrFQ2T6Obo"

    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;                                                                                                                        
  });
export default main_url;