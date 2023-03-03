import React from "react";
import WeatherDetailItem from "./WeatherDetailItem";
import rain from "../../img/rain_deatil.png";
import wind from "../../img/wind.png";
import humidity from "../../img/humidity.png";
import snow from "../../img/snow.png";

const WeatherDetail = ({currentWeather}) => {
    return (
        <ul className="weather-detail__list">
            {currentWeather.rain && (
                <WeatherDetailItem
                    title="Rain Fall"
                    value={`${Object.values(currentWeather.rain)[0]} cm`}
                    icon={rain}
                />
            )}
            {currentWeather.snow && (
                <WeatherDetailItem
                    title="Snow"
                    value={`${Object.values(currentWeather.snow)[0]} mm`}
                    icon={snow}
                />
            )}
            <WeatherDetailItem
                title="Wind"
                value={`${currentWeather.wind_speed} m/s`}
                icon={wind}
            />
            <WeatherDetailItem
                title="Humidity"
                value={`${currentWeather.humidity} %`}
                icon={humidity}
            />
        </ul>
    );
};

export default WeatherDetail;
