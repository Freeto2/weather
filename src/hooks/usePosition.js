import axios from "axios";
import { useEffect, useState } from "react";
import { useFetching } from "./useFetching";

export const usePosition = (search) => {
    const [weatherData, setWatherData] = useState({
        lat: '',
        lon: '',
        city: '',
        response: {},
    });

    const [fetchGeo, loading, error] = useFetching(async () => {
        if (search) {
            const response = await axios.get(
                "http://api.openweathermap.org/geo/1.0/direct",
                {
                    params: {
                        q: search,
                        limit: 1,
                        appid: "76667ffb986be625da8dc72470ffd10e",
                    },
                }
            );

            setWatherData({
                ...weatherData,
                lat: response.data[0].lat,
                lon: response.data[0].lon,
                city: response.data[0].local_names.ru,
                response: response.data[0],
            });
        } else {
            const response = await axios.get("http://ipwho.is/", {
                params: {
                    lang: "en",
                },
            });
            setWatherData({
                ...weatherData,
                lat: response.data.latitude,
                lon: response.data.longitude,
                city: response.data.city,
                response: response.data,
            });
        }
    });

    useEffect(() => {
        fetchGeo(); 
    }, [search]);

    return [
        weatherData.city,
        weatherData.lat,
        weatherData.lon,
        loading,
        weatherData.response,
    ];
};

export default usePosition;
