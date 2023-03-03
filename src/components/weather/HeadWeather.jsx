import React from "react";
import SearchIcon from "./icons/SearchIcon";

const HeadWeather = ({searchOpen}) => {
    return (
        <div className="head-weather">
            <button className="search-button" onClick={searchOpen}>
               <SearchIcon />
            </button>
        </div>
    );
};

export default HeadWeather;
