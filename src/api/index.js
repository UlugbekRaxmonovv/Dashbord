import axios from "axios";

const main_url= axios.create({
    baseURL:'https://tour.touristan-bs.uz/v1'
})

main_url.interceptors.request.use((req) => {
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY1ODc5NDAsImlhdCI6MTcxNTg2Nzk0MCwiaXNzIjoiIiwicm9sZSI6InN1ZG8iLCJzdWIiOiIyZTljYTI3Ni01Nzk5LTRmMzQtYTBhNi05MzhmN2IwYTVjOGQifQ.35asFbKCVQiu8tg2Wc4SmdENP5NBe_qIJsZTQo_qQXo"

    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  });
export default main_url;