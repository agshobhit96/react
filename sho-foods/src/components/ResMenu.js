import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants"; 
import ShimmerCards from "./ShimmerCards";

const ResMenu = () => {

  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResMenuData();
  }, []);

  const {resId} = useParams(); // same as const resId = useParams().resId;

  const fetchResMenuData = async () => {
    const resMenuData = await fetch(MENU_URL + resId);
    const jsonMenu = await resMenuData.json();
    setResMenu(jsonMenu);
    console.log(jsonMenu);
  }

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