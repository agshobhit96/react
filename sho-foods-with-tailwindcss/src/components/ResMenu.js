import { useParams } from "react-router-dom";
import ShimmerCards from "./ShimmerCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {

  const {resId} = useParams(); // same as const resId = useParams().resId;

  const resMenu = useRestaurantMenu(resId);

  console.log(resMenu);
  if (resMenu === null) return <ShimmerCards />;

  const {name, cuisines, costForTwoMessage, avgRatingString} = resMenu?.data?.cards[2]?.card?.card?.info;
  const menuItems = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card?.itemCards;

  return (
    <div className="restaurant-page">
      <h1>{name}</h1>
      <h4>{avgRatingString} *</h4>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwoMessage}</div>
      <br />
      <br/>
      <h3>Menu</h3>
      <ul>
        {
            menuItems.map((item) => 
                 <li key={item.card.info.id}>
                    {item.card.info.name} - RS. {item.card.info.price/100}
                 </li>
            )
        }
      </ul>

    </div>
  );
}

export default ResMenu;