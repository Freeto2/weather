import axios from "axios";
import { useEffect, useState } from "react";
import { useFetching } from "./useFetching";

export const useSearch = (searchValue) => {

    const [searchData, setSearchData] = useState({});

    const [searchQuery, loading, error] = useFetching(async () => {
        if(searchValue) {
            const response = await axios.get(
                "http://api.openweathermap.org/geo/1.0/direct",
                {
                    params: {
                        q: searchValue,
                        limit: 100,
                        appid: "76667ffb986be625da8dc72470ffd10e",
                    },
                }
            );
            setSearchData(response.data);
        }
        
    });

    useEffect(() => {
        searchQuery()

        
    }, [searchValue])

    

    return searchData
};
