import React from "react";
import { useRouteError } from "react-router";


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        
        <div>
            Something went wrong!
            <h2> {err.status}:{err.statusText}  </h2>
        </div>
    );
};

export default Error;
