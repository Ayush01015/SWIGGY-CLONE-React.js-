export function filterData(searchText, allRestaurants) {
    //filtering data from allRestaurants
   const filterData = allRestaurants.filter((restaurant) =>
     restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
   );
 
   return filterData; //returning searched data
}

