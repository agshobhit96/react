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
        <div className="w-56 bg-gray-100 m-4 p-4 rounded-md hover:bg-gray-200 text-sm">
            <img className="res-logo" src={RES_URL} alt="res-image" />
            <h3 className="text-lg font-bold">{name}</h3>
            <p>{locality}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRatingString} stars</p>
            <p>{sla.slaString}</p>
           
        </div>
    )
};

export default ResCards;