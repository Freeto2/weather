import React, { useRef, useState } from "react";
import HeadWeather from "./HeadWeather";
import SearchCity from "./SearchCity";
import StatusWeather from "./StatusWeather";

import WeatherDetail from "./WeatherDetail";

const Weather = ({city, country, currentWeather, search, setSearch, loading, getSearchSelect}) => {

    const [openModal, setOpenModal] = useState(false)

    const date = new Intl.DateTimeFormat().format(new Date());

    const openModalSearch = () => {
        setOpenModal(!openModal)
    }

    const submitSearchForm = (event) => {
        event.preventDefault();

        setOpenModal(false)
    }

    return (
        <div className={openModal ? 'weather-app open-search' : 'weather-app'}>
            <div className="weather-wrapper">
                <HeadWeather searchOpen={openModalSearch}/>
                {city === undefined ? (
                    <>
                        <div className="weather-place not-found">
                            <div className="city-title">Город не найден</div>
                        </div>
                    </>
                ) : (
                    <div className="weather-body">
                        <div className="weather-place">
                            <div className="city-title">
                                {city}, <br />
                                {country}
                            </div>
                            <div className="date">{date}</div>
                        </div>
                        <StatusWeather current={currentWeather} />
                        <WeatherDetail currentWeather={currentWeather} />
                    </div>
                )}
                
                <SearchCity search={search} setSearch={setSearch} submitSearch={submitSearchForm} getSearchSelect={getSearchSelect}/>
            </div>
        </div>
    );
};

export default Weather;
