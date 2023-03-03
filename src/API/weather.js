import axios from "axios";

export default class WeatherService {


    static async getAll(latNum, lonNum) {
        if(latNum) {
            const response = axios.get(
                "https://api.openweathermap.org/data/3.0/onecall",
                {
                    params: {
                        lat: latNum,
                        lon: lonNum,
                        units: 'metric',
                        lang: 'en',
                        exclude: "daily",
                        appid: "76667ffb986be625da8dc72470ffd10e",
                    },
                }
            );
            return response;
        }
        
    }

    // Достаем координаты для города для поиска
    static async getCity(city) {
        const response = axios.get('http://api.openweathermap.org/geo/1.0/direct', {
            params: {
                direct: 'city',
                limit: 1,
                appid: "76667ffb986be625da8dc72470ffd10e",
            }
        })

        return response;
    }
}
