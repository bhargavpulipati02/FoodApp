import { useState,useEffect } from "react";
import { RESMENU_URL } from "./constants";
const useRestaurantMenu = (resId) =>{
    const[resInfo,setresInfo] = useState(null)


     useEffect(()=>{
        fetchMenu();

    }, []);
    async function fetchMenu(){
        const data = await fetch(RESMENU_URL+resId);
        const json = await data.json();
        // console.log(json);
        setresInfo(json);
    };

    return resInfo;
}

export default useRestaurantMenu;