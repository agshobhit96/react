import { useParams } from "react-router-dom";
import { useState } from "react";
import ShimmerCards from "./ShimmerCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuAccordion from "./ResMenuAccordion";

const ResMenu = () => {

  const {resId} = useParams(); // same as const resId = useParams().resId;

  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  console.log(resMenu);
  if (resMenu === null) return <ShimmerCards />;

  const {name, cuisines, costForTwoMessage, avgRatingString} = resMenu?.data?.cards[2]?.card?.card?.info;
  const menuItems = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card?.itemCards;
  const menuCategories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="restaurant-page">
      <h1>{name}</h1>
      <h4>{avgRatingString} *</h4>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwoMessage}</div>
      <br />
      <br/>
      <h3>Menu</h3>

      <div>
      
        {
            // menuItems.map((item) => 
            //      <li key={item.card.info.id}>
            //         {item.card.info.name} - RS. {item.card.info.price/100}
            //      </li>
            // )

            menuCategories.map((category, index) => (
              <ResMenuAccordion key={category.card?.card?.title} menu={category}
               showItems={index === showIndex? true : false} setShowItems={()=> index === showIndex? setShowIndex(null) : setShowIndex(index)} />
            ))
        }
      
      </div>
    </div>
  );
}

export default ResMenu;