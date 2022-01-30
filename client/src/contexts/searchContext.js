
import { useState, createContext, useContext } from 'react';

const SearchContext = createContext({});

export const useSearch = () => {

    return useContext(SearchContext)
}

const SearchContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{searchTerm, setSearchTerm}}>{children}</SearchContext.Provider>
    )
}

export default SearchContextProvider