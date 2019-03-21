import React from 'react';
import SingleItem from './SingleItem.js';

const Mainfeed = ({ebayResults}) => {
    const allItems = ebayResults.map((item)=>{
            return (
                <SingleItem key={Math.random()} item={item} />
                )
            })
            
        return(
            <div className="row content">
                    <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                    {allItems}
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 text-center"> 
                          <h1>Welcome</h1>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 text-center ">
                          right List
                    </div>
            </div>
            )
    }
 


export default Mainfeed;