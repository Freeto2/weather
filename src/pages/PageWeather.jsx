import React, { useEffect, useState } from "react";
import WeatherService from "../API/weather";
import Weather from "../components/weather/Weather";
import { useFetching } from "../hooks/useFetching";
import usePosition from "../hooks/usePosition";
import PageWrapper from "./PageWrapper";

const PageWeather = () => {
    const [searchCity, setSearchCity] = useState("");
    const [city, lat, lon, loadingGeo, resp] = usePosition(
        searchCity,
        setSearchCity
    );
    const [searchSelect, setSearchSelect] = useState({
        lat,
        lon,
        city,
        country: ''
    });

    // console.log(city, lat, lon, loadingGeo);

    const [weatherData, setWatherData] = useState();

    const [fetchWeather, loading, error] = useFetching(async () => {
        if (searchSelect.lat) {
            const response = await WeatherService.getAll(
                searchSelect.lat,
                searchSelect.lon
            );
            // console.log("search selected");
            // setSearchCity(searchSelect.city);
            setWatherData(response.data);
        } else {
            const response = await WeatherService.getAll(lat, lon);
            // console.log("search not selected");
            setWatherData(response.data);
        }
        // const response = await WeatherService.getAll(lat, lon);
    });

    useEffect(() => {
        !loadingGeo && fetchWeather();
    }, [loadingGeo, searchSelect.lat]);

    const selectSearch = (lat, lon, city, country) => {
        // setSearchCity("");

        setSearchSelect({ ...searchSelect, lat: lat, lon: lon, city: city, country: country });

        // setSearchSelect({
        //     ...searchSelect,
        //     lat: "",
        //     lon: "",
        //     city: "",
        // });
    };

    return (
        <PageWrapper title="Weather" classWrapper="weather">
            {weatherData && (
                <Weather
                    city={searchSelect.city ? searchSelect.city : city}
                    country={searchSelect.country ? searchSelect.country : resp.country}
                    currentWeather={weatherData.current}
                    search={searchCity}
                    setSearch={setSearchCity}
                    loading={loadingGeo}
                    getSearchSelect={selectSearch}
                />
            )}
        </PageWrapper>
    );
};

export default PageWeather;
