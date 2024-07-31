import "./App.css";
import "tailwindcss/tailwind.css";
import NavBar from "./components/nav-bar/NavBar";
import DestinationSearch from "./components/destination-search/DestinationSearch";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div>
      <div className="   flex flex-col bg-[#FAFAFA]">
        <div className="bg-white basis-full w-[100%] xmd:px-[60px] sm:px-[20px] lg:px-[139px] py-[15px]">
          <NavBar />
        </div>
        <div className="xmd:px-[60px] lg:px-[139px] sm:px-[20px]">
          <DestinationSearch />
        </div>
        <div className="xmd:px-[60px] lg:px-[139px] sm:px-[20px]">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
