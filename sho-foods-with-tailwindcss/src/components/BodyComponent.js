import ResCards from "./ResCards";
import resItems from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const BodyComponent = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);


    const filterBtnClicked = () => {
        console.log("Filter Button Clicked function called  ", listOfRes);
        let updatedList = listOfRes.filter((item) => {
            return item.data.rating >= 4;
        });
        setFilteredListOfRes(updatedList);
    };

    // gets called after the first render
    useEffect(() => {
        // API call
        // Fetch data
        // Update state
        fetchData();
    },[]);

    const fetchData = async () => {
            
        // setListOfRes(resItems);
        // setFilteredListOfRes(resItems);

        // MAKE API CALL

        const resData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9687095&lng=77.75200319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData = await resData.json();
        console.log(jsonData);
        const res = jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(res);
        setListOfRes(res);
        setFilteredListOfRes(res);
    }

    const isOnline = useOnlineStatus();

    if (!isOnline) {
        return <h1> You are offline. Please check your internet connection. </h1>
    }

    if (listOfRes.length === 0) {
        // Show loader or Shimmer UI
        return <ShimmerCards />;
    }

    return (
        <div className="body">
            <div className="filter-container">
                <div className="search-container">
                    <input type="text" placeholder="Search" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                    <button onClick={()=> {
                        console.log("Search Button Clicked", searchText);
                        let filteredList = listOfRes.filter((item) => {
                            return item.data.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredListOfRes(filteredList);
                    }}>Search</button>
                </div>
                <button className="filterBtn" onClick={()=> {
                    filterBtnClicked();
                   
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredListOfRes.map((item, index) => {
                        return (
                            // Using array index as key is not recommended
                            <Link key={item.info.id} to={"/restaurant/"+item.info.id}>
                                <ResCards key={index} resList={item}/>
                            </Link>
                        );
                    })
                }
            </div>

        </div>
    );
};

export default BodyComponent;