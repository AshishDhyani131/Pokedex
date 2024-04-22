import { createContext, useState } from "react";

export const SearchContext = createContext({
  searchInput: null,
  updateSearchInput: null,
});

export default function SearchContextProvider({ children }) {
  const [inputSearch, setInputSearch] = useState("");
  function handleInputSubmit(value) {
    setInputSearch(value);
  }
  const searchCtx = {
    searchInput: inputSearch,
    updateSearchInput: handleInputSubmit,
  };
  return (
    <SearchContext.Provider value={searchCtx}>
      {children}
    </SearchContext.Provider>
  );
}
