import { createContext, useState } from "react";

export const SearchContext = createContext({});
export const SearchProvider = SearchContext.Provider;


export default function SearchContextProvider({children}) {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');
  
    return (
      <SearchProvider
        value={{search, setSearch, results, setResults}}>
        {children}
      </SearchProvider>
    );
  }
