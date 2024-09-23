import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchResMenuData();
    }, []);

    const fetchResMenuData = async () => {
        const resMenuData = await fetch(MENU_URL + resId);
        const jsonMenu = await resMenuData.json();
        setResMenu(jsonMenu);
        console.log(jsonMenu);
    }

    return resMenu;
}

export default useRestaurantMenu;   