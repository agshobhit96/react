import ResCards from "./ResCards";
import resItems from "../utils/mockData";
import { useState } from "react";


const BodyComponent = () => {
    const [listOfRes, setListOfRes] = useState(resItems);


    const filterBtnClicked = () => {
        console.log("Filter Button Clicked function called  ", listOfRes);
        let updatedList = listOfRes.filter((item) => {
            return item.data.rating >= 4;
        });
        setListOfRes(updatedList);
    };

    return (
        <div className="body">
            <div className="filter-container">
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
                <button className="filterBtn" onClick={()=> {
                    filterBtnClicked();
                   
                }}>Top Rated Restaurants</button>
            </div>
            <div className="cards-container">
                {
                    listOfRes.map((item, index) => {
                        return (
                            <ResCards key={index} resList={item}/>
                        );
                    })
                }
            </div>

        </div>
    );
};

export default BodyComponent;