import { filterData } from "../Utils/Utils";
const Search = ({searchInput,setSearchInput,setfilteredRestaurants,allRestaurants}) =>{
    return(
        <div className="search-component">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurants
            setfilteredRestaurants(data);
            // setSearchInput("Clicked");
          }}
        >
          Search
        </button>
      </div>
    )
}
export default Search;


