import { CDN_URL } from "../utils/constants";
import React from "react";
const RestuarantCard = (props)=>{
    const {resData} = props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        deliveryTime
    } =resData?.info;


    return(
        <div className="res-card">
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3> {name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4> {avgRatingString}</h4>
            <h4>{deliveryTime}</h4>
        </div>

    );
};

// Higher order component
// input : restaurant card 
// output: res card with is open label

export const withOpenLabel = (RestuarantCard)=>{
    return (props)=>{
        return(
            <div>
                <label>Opened</label>
                <RestuarantCard{...props}/>

            </div>
            
        );
    };
};


export default RestuarantCard;
