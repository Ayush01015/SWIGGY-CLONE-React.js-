export function filterData(searchText, allRestaurants) {
    //filtering data from allRestaurants
   const filterData = allRestaurants.filter((restaurant) =>
     restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
   );
 
   return filterData; //returning searched data
}

