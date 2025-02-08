import { User } from "./User";
import React from "react";
export const About = ()=>{
    return (
        <div className="about">
            <User/>
        </div>
    );
};


// smaller bundles of these files -> process is called chunking/lazy loading/dynamic bundling/on demand loading

// CSS - Tailwind CSS