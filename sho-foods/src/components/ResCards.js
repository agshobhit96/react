import { RES_URL } from "../utils/constants";

const ResCards = (properties) => {
    console.log(properties);
    const {resList} = properties;
    console.log(resList);
    const {name, location, rating, cuisine, delivery} = resList?.data; // Destructuring; const name = resList.data.name;
    console.log(name, location, rating, cuisine, delivery);
    return (
        <div className="res-cards">
            <img className="res-logo" src={RES_URL} alt="res-image" />
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{cuisine}</p>
            <p>{rating} stars</p>
            <p>{delivery} mins</p>
           
        </div>
    )
};

export default ResCards;