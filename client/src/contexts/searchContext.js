import React,{ useState, createContext, useContext } from 'react';

const SearchContext = createContext({});



const SearchContextProvider = ({children}) => {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{search, setSearch}}>{children}</SearchContext.Provider>
    )
}

export default SearchContextProvider
export const useSearch = () => {

    return useContext(SearchContext)
}