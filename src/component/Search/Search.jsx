import React from 'react';
import rasm1 from  '../../assets/img/minu.png'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";

const Search = () => {
    return (
        <div className='container'>
            <div className="search">
                <div className="search_all">
                    <img src={rasm1} alt="" />
                </div>
                <div className="search_al">
                <div className="search_alt">
                <div className="search_alt_row">
                <input type="text" placeholder="Search" />
                    <CiSearch />
                    </div> 
                    <div className="search_alt_row">
                    <VscBell />

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
