import React, { useEffect, useState } from "react";
import usePosition from "../../hooks/usePosition";
import { useSearch } from "../../hooks/useSearch";

const SearchCity = ({ search, setSearch, submitSearch, getSearchSelect }) => {
    const searchHints = useSearch(search);

    return (
        <div className="search-modal">
            <form onSubmit={(event) => submitSearch(event)}>
                <input
                    type="text"
                    placeholder="City"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ul className="search-hints">
                    {searchHints.length ?
                        searchHints.map((item, index) => (
                            <li key={index}>
                                <button
                                onClick={() => getSearchSelect(item.lat, item.lon, item.name, item.country)}
                                >{`${item.name}${item.state ? ', ' + item.state : ''}`} - {item.country}</button>
                            </li>
                        ))
                        : 'Not found'}
                </ul>
            </form>
        </div>
    );
};

export default SearchCity;
