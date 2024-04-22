import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import SearchContextProvider from "./context/context";
import { Routes, Route } from "react-router-dom";
import PokeDetail from "./components/PokeDetail";
function App() {
  return (
    <SearchContextProvider>
      <div className="max-w-[375px] h-full bg-[#DC0A2D] sm:rounded-md">
        <Header></Header>
        <main className="mt-8 mx-1 mb-1 bg-white rounded-lg w-[22rem] h-96 overflow-hidden">
          <Routes>
            <Route path="/" element={<SearchResults />}></Route>
            <Route path="/:id" element={<PokeDetail />}></Route>
          </Routes>
        </main>
      </div>
    </SearchContextProvider>
  );
}

export default App;
