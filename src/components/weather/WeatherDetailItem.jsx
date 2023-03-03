import React from "react";


const WeatherDetailItem = ({  title, value, icon }) => {
    return (
        <li className="weather-detail__item">
            <div className="detail__left">
                <div className="detail__icon">
                    <img src={icon} alt="" />
                    <img className="icon__blur" src={icon} alt="" />
                </div>
                <div className="detail__name">{title}</div>
            </div>
            <div className="detail__value">{value}</div>
        </li>
    );
};

export default WeatherDetailItem;
