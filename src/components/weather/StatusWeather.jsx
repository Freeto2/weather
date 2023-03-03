import React from "react";
import Cloudy from "./icons/Cloudy";
import WeatherIcon from "./WeatherIcon";

const StatusWeather = ({ current }) => {
    return (
        <div className="status-weather">
            <WeatherIcon icon={current.weather[0].icon}/>
            {/* <Cloudy /> */}
            <div className="temp-info">
                <div className="temp">
                    <span className="temp-current">{Math.round(current.temp)}</span>
                    <span>{current.weather[0].description}</span>
                </div>
                {/* <div className="temp-unit">°c</div> */}
            </div>
        </div>
    );
};

export default StatusWeather;
