import "./App.css";
import "tailwindcss/tailwind.css";
import NavBar from "./components/nav-bar/NavBar";
import DestinationSearch from "./components/destination-search/DestinationSearch";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div>
      <div className="px-[139px] py-[15px] flex flex-col bg-[#FAFAFA]">
        <NavBar />
        <DestinationSearch />
        <Filter />
      </div>
    </div>
  );
}

export default App;
