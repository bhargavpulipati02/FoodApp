
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import React from "react";
import ResCatogery from "./ResCatogery";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    // custom hook: useRestaurantMenu
    const resInfo = useRestaurantMenu(resId);

      
    if(resInfo === null) return <Shimmer/>;


    const {name, cuisines, cloudinaryImageId, costForTwoMessage} =resInfo?.data?.cards[2]?.card?.card?.info;
   
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card; 
    const catogery = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c =>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(catogery);
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> {name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(" ,")} - {costForTwoMessage}
            </p>
            { catogery.map((c) => <ResCatogery data={c?.card?.card}/> )}






            {/* <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} -Rs: {item.card.info.price/100}</li>)}
                
            </ul> */}
        </div>
    )


}

export default RestaurantMenu; 