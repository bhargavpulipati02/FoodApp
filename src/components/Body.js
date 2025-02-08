import RestuarantCard, { withOpenLabel } from "./RestuarantCard";
import {restaurantList} from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import React from "react";


const Body = () =>{

    const [hookrestaurantList, sethookrestaurantList] =  useState([]);
    const [hookFilteredRestaurantList, sethookFilteredRestaurantList] = useState([]);
    const [searchText,setsearchText] = useState("");
     

    const RestuarantCardOpened = withOpenLabel(RestuarantCard);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        sethookrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        sethookFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    // console.log("res" + hookFilteredRestaurantList);

    const isOnline =  useOnlineStatus();
    if(!isOnline){
        return(
            <h1> offline- No internet</h1>
        );
    };

    if(hookrestaurantList.length === 0){
        return <Shimmer/>;
    }

    return (
        <div className="body">

            
            <div className="filter">
                <div className="search">
                    
                    <input type="text" className="search-box" 
                    value={searchText}
                    onChange={(e) =>{
                        setsearchText(e.target.value);

                    }}
                    />
                    <button onClick={()=>{
                        const filteredRestuarantsSearch = hookrestaurantList.filter((res)=> 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        

                    sethookFilteredRestaurantList(filteredRestuarantsSearch);
                        

                    }}
                    > search</button>

                    
                </div>

                <button
                className="filter-button"
                onClick={ () =>
                {
                    filteredRestuarants = hookrestaurantList.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    sethookFilteredRestaurantList(filteredRestuarants);
                   
                }   }>
                highest avgRating</button>
                <button
                className="filter-button"
                onClick={ () =>
                {
                    filteredRestuarants = hookrestaurantList.filter(
                        (res) => res.info.avgRating < 4.5
                    );
                    sethookFilteredRestaurantList(filteredRestuarants);
                   
                }   }>
                lowest avgRating</button>
           
           
            </div>

            

           
            <div className="res-container">
                {
                    
                    hookFilteredRestaurantList.map((restuarant)=>(
                        < Link key={restuarant.info.id} to ={"/restaurants/"+restuarant.info.id}>
                        {
                            restuarant.info.isOpen? (<RestuarantCardOpened resData={restuarant}/>):(<RestuarantCard resData={restuarant}/>)
                        }
                       
                        </Link>

                    ))
                }
                

            </div>
        </div>

    );
};

export default Body; 