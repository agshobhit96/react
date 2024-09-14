import { RES_URL } from "../utils/constants";

const ResCards = (properties) => {
    console.log(properties);
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
           
        </div>
    )
};

export default ResCards;