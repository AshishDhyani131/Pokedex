import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
function App() {
  return (
    <div className="max-w-[375px] h-full bg-[#DC0A2D] sm:rounded-md">
      <Header></Header>
      <SearchResults></SearchResults>
    </div>
  );
}

export default App;
