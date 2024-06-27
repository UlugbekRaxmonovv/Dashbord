import React, { useState, useEffect, createContext } from "react";
import rasm2 from "../../assets/img/delet.png";
import rasm3 from "../../assets/img/pen 1.png";
import { MdPeopleAlt } from "react-icons/md";
import rasm4 from "../../assets/img/minu.png";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import axios from "../../api";
import "./Hotel.css";
import { Link } from "react-router-dom";
// import { VscChromeClose } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
export const ThemeContext = createContext(null)


const intialstate = {
    address: "",
    city: "",
    contact_number: "",
    country: "",
    description: "",
    hotel_name: "",
    latitude:40.7128,
    licence_url: "",
    longitude:  74.006,
    rating:  4.6,
    state_province: "",
    website_url: "",
  }

  console.log(intialstate);


const Hotel = () => {
  const [user, setUser] = useState([]);
  const [modul, setModul] = useState(false);
  const [name, setName] = useState(intialstate);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState([]);
  const [render, setrender] = useState(true);
  const [img, setImg] = useState(false);
  const [form, setForm] = useState(null);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const [modulall, setModulAll] = useState(null);
  const [modulall1, setModulAll1] = useState(false);
  const [file, setFile] = useState([]);
  const [hotelId, stHotelId] = useState('');

  // scroll
  document.body.style.overflow = modul ? "hidden" : "auto";
  document.body.style.overflow = menu ? "hidden" : "auto";
  // counter
  let javob = count1;
  let javob1 = javob / 10;
  let javob2 = Math.ceil(javob1);

  //  limit///////////////////////////////
  useEffect(() => {
    axios
      .get(`/hotel/list?page=${count + 1}&limit=10`)
      .then((arr) => setUser(arr.data.hotels))
      .catch((err) => console.log(">>>>>>", err));
  }, [count, render]);

  //   table////////////////////////////
  let link = user
    ?.filter((user) => {
      return (
        user.hotel_name.toLowerCase().includes(search.toLowerCase()) ||
        user.contact_number.toLowerCase().includes(search.toLowerCase()) ||
        user.created_at.toLowerCase().includes(search.toLowerCase()) ||
        user.location.city.toLowerCase().includes(search.toLowerCase()) ||
        user.location.country.toLowerCase().includes(search.toLowerCase())
      );
    })
    ?.map((user) => (
      <>
        <tr
          key={user.hotel_id}
         
        >
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}>
            <div className="tr">
              <div className="tr_th">
                {img ? 
                  <img src={user?.profile_img} alt="img" />
                 : 
                  <MdPeopleAlt style={{ fontSize: "30px", color: "gray" }} />
                }
              </div>
              <div className="tr_th">{user.hotel_name}</div>
            </div>
          </td>
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}>{user.location.city}</td>
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}>{user.contact_number}</td>
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}>{user.hotel_id}</td>
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}>{user.location.country}</td>
          <td  onClick={() => setModulAll(user) || setMenu(!menu)}> {user.created_at} </td>
          <td>
            <div className="delet">
              <img src={rasm3} alt="" onClick={() => setForm(user)} />
              <button onClick={() => deleteUser(user.hotel_id)}>
                <img src={rasm2} alt="" />
              </button>
            </div>
          </td>
        </tr>
      </>
    ));


  // delete////////////////////////////
  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      axios
        .delete(`/hotel?hotel_id=${id}`)
        .then((response) => {
          setrender(response);
        })
        .catch((err) => console.log(err));
    }
  };

  // Length ///////////////////////
  useEffect(() => {
    axios.get("/hotel/list?page=1&limit=10").then((res) => {
      setCount1(res.data.count);
    });
  }, []);

  // table push//////////////////
  const AddTable = (event) => {
    event.preventDefault();
    axios
        .post("/hotel", name)
        .then((response) => {
            setrender((p) => !p);
            console.log(response);
            stHotelId(response.data.hotel_id);
            setModul(false);  
            setName(intialstate);
            setModulAll1(!modulall1)
        })
        .catch((arr) => console.log(" >>>>>>>>>>", arr));
};


const handleFileUpload = async (event) => {
  event.preventDefault();
  
  if (!file) {
    console.log("No file selected");
    return;
  }

  const formData = new FormData();
  formData.append("file", file[0]); 

  try {
    const response = await axios.post(`https://tour.touristan-bs.uz/v1/media/establishment/${hotelId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    setrender((prev) => !prev);
    setFile([]);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};




const handelRemovImg = (inx) => {
  setFile((prev) => [...prev].filter((_,i) =>  i !== inx ))
}

  

  return (
    <div>
      <div className={`resturan${menu ? "modul" : ""}`}>
        <div className="resturan_All">
          <VscChromeClose onClick={() => setMenu(!menu)} />
          <div className="resturan_row">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              //   autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   }}
              //   loop={true}
              className="mySwiper"
            >

              {modulall?.images?.map((el) => (
                <SwiperSlide key={el.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img width={100} src={el.image_url} alt="rasm" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p title={modulall?.id}>
              <span>Id :</span>
              {modulall?.hotel_id}
            </p>
            <p>
              <span>Full Name: </span>
              {modulall?.hotel_name}
            </p>
            <p>
              <span>Owner Id: </span>
              {modulall?.owner_id}
            </p>
            <p>
              <span>Website: </span>
              {modulall?.website_url}
            </p>
            <p>
              <span>Description: </span>
              {modulall?.description}
            </p>
            <p>
              <span>Rating: </span>
              {modulall?.rating}
            </p>
            <p>
              <span>Contact Number: </span>
              {modulall?.contact_number}
            </p>
            <p>
              <span>Created At: </span>
              {modulall?.created_at}
            </p>
            <p>
              {" "}
              <span>Updated At: </span> {modulall?.updated_at}
            </p>
            <p>
              <span>Location_id : </span>
              {modulall?.location?.location_id}
            </p>
            <p>
              <span>Establishment_id : </span>
              {modulall?.location?.establishment_id}
            </p>
            <p>
              <span>Address : </span>
              {modulall?.location?.address}
            </p>
            <p>
              <span>Latitude : </span>
              {modulall?.location?.latitude}
            </p>
            <p>
              <span>Longitude : </span>
              {modulall?.location?.longitude}
            </p>
            <p>
              <span>Atate Province : </span>
              {modulall?.location?.state_province}
            </p>
            <p>
              <span>Country : </span>
              {modulall?.location?.country}
            </p>
            <p>
              <span>City : </span>
              {modulall?.location?.city}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="search">
          <div className="search_all">
            <Link to={"/home"}>
              {" "}
              <img src={rasm4} alt="" />
            </Link>
          </div>
          <div className="search_al">
            <div className="search_alt">
              <div className="search_alt_row">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <CiSearch />
              </div>
              <div className="search_alt_row">
                <VscBell />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`all ${modul ? "show" : "all"}`}
        onClick={() => setModul(false)}
      ></div>

      <div className={`modal ${modul ? "show" : "modal"}`}>
        <div className="modal_row">
          <form action="" onSubmit={AddTable}>
            <label htmlFor="">Contact Number </label> <br />
            <input
              value={name.contact_number}
              onChange={e =>
                setName(prev => ({ ...prev, contact_number: e.target.value }))
              }
              type="text"
            />{" "}
            <br />
            <label htmlFor="">Description</label> <br />
            <input
              value={name.description}
              onChange={e =>
                setName(prev => ({ ...prev, description: e.target.value }))
              }
              type="text"
            />{" "}
            <br />
            <label htmlFor=""> Hotel Name</label> <br />
            <input
              type="text"
              value={name.hotel_name}
              onChange={e =>
                setName(prev => ({ ...prev, hotel_name: e.target.value }))
              }
            />
            <br />
            <label htmlFor="">Address</label> <br />
            <input
              type="text"
              value={name.address}
              onChange={e =>
                setName(prev => ({ ...prev, address: e.target.value }))
              }
            />
            <br />
            <label htmlFor="">City</label> <br />
            <input
              type="text"
              value={name.city}
              onChange={e =>
                setName(prev => ({ ...prev, city: e.target.value }))
              }
            />
            <br />  

            <label htmlFor="">Country</label> <br />
            <input
              type="text"
              value={name.country}
              onChange={e =>
                setName(prev => ({ ...prev, country: e.target.value }))
              }
            />
            <br />
            <label htmlFor="">Latitude</label> <br />
            <input
              type="number"
              value={name.latitude}
              onChange={e =>
                setName(prev => ({ ...prev, latitude: e.target.value }))
              }
            />{" "}
            <br />
            <label htmlFor="">Longitude</label> <br />
            <input
              type="number"
              value={name.longitude}
              onChange={e =>
                setName(prev => ({ ...prev, longitude: e.target.value }))
              }
            />{" "}
            <br />
            <label htmlFor="">State Province</label> <br />
            <input
              type="text"
              value={name.state_province}
              onChange={e =>
                setName(prev => ({ ...prev, state_province: e.target.value }))
              }
            />
            <br />
            <label htmlFor="">Rating</label> <br />
            <input
              value={name.rating}
              onChange={e =>
                setName(prev => ({ ...prev, rating: e.target.value }))
              }
              type="number"
            />
            <br />
            <label htmlFor="">Website Url</label> <br />
            <input
              type="text"
              value={name.website_url}
              onChange={e =>
                setName(prev => ({ ...prev, website_url: e.target.value }))
              }
            />
            <br />

            <label htmlFor="">Licence Url</label> <br />
            <input
            required
              type="text"
              value={name.licence_url}
              onChange={e =>
                setName(prev => ({ ...prev, licence_url: e.target.value }))
              }
            />
            <br />
           
            <button type="submit">Next</button>
            
          </form>
        </div>
      </div>

      <div
        className={`alo ${modulall1 ? "low1" : "alo"}`}
        onClick={() => setModulAll1(false)}
      ></div>
<div className={`low ${modulall1 ? "low1" : "low"}`}>
<form onSubmit={handleFileUpload}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFile(e.target.files)}
          />
           <br />
           <div className='local_imgs'>
             {
Object.values(file)?.map((img,inx) =>(
    <div key={inx} className='local_img' >
      <img  src={URL.createObjectURL(img)} alt="" width='100px' height='100px' />
        <VscChromeClose onClick={() => handelRemovImg(inx)} />
        </div>
))
  }
        </div>
          <button>Upload</button>
        </form>
</div>
      

      <section className="UserAdd">
        <div className="container">
          <div className="UserAdd_i">
            <div className="UserAdd_l">
              <div className="UserAdd_u">
                <Link>
                  {" "}
                  <p>Hotel List</p>
                </Link>
              </div>
            </div>

            <div className="btn-2">
              <button className="btn-1" onClick={() => setModul(!modul)}>
                ADD NEW HOTEL
              </button>
            </div>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Country</th>
              <th className="th">Date of admission</th>
            </tr>

            {link}
          </table>
          <div className="btn">
            <div className="btn1">
              <button
                disabled={count <= 0}
                onClick={() => setCount((p) => p - 1)}
              >
                previous
              </button>
            </div>
            <div className="number">
              <div className="btn1">{count + 1}...</div>
              <div className="btn1">{javob2}</div>
            </div>
            <div className="btn1">
              <button
                disabled={count == javob2 - 1}
                onClick={() => setCount((p) => p + 1)}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* {
     form ? <UserPutForm   data={form} setData={setForm}  />
     :
     <></>
    } */}
    </div>
  );
};

export default Hotel;
