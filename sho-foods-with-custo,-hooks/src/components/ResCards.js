import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResCards = (properties) => {
    const {loggedInUser} = useContext(UserContext);
    const {resList} = properties;
    console.log(resList);
   // const {name, location, rating, cuisine, delivery} = resList?.data; // Destructuring; const name = resList.data.name;
    // console.log(name, location, rating, cuisine, delivery);
    const {name, locality, avgRatingString, cuisines, sla} = resList?.info;
    console.log(name, locality, avgRatingString, cuisines, sla);
    return (
        <div className="res-cards">
            <img className="res-logo" src={RES_URL} alt="res-image" />
            <h3>{name}</h3>
            <p>{locality}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRatingString} stars</p>
            <p>{sla.slaString}</p>
            <p>User: {loggedInUser}</p>
        </div>
    )
};


// We will create a Higher Order Component (HOC) to wrap the ResCards component with label

export const ResCardWithLabel = (ResCard) => {
    return (properties) => {
        return (
            <div>
                <label style={{position: 'absolute', margin: '5px', padding: '5px', background: 'black', color: 'white'}}>favorite</label>
                <ResCard {...properties} />
            </div>
        )
    }
}

export default ResCards;