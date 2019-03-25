import React from 'react';
import SingleItem from './SingleItem.js';
import SelectedItem from './SelectedItem.js';



// Mainfeed takes 2 arguments from props object : props.ebayResults which are all items we gotfrom axios get request.
// And onItemSelect which is acallback function we passing from APp component.
const Mainfeed = ({ebayResults,onItemSelect,selectedItem}) => {
    
    const allItems = ebayResults.map((item)=>{
            return (
                <SingleItem key={Math.random()} item={item} onItemSelect={onItemSelect}/>
                )
            });
        return(
            <div className="row content">
                    <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                    {allItems}
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 text-center"> 
                    <SelectedItem selectedItem={selectedItem}/>
                     </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 text-center ">
                          right List
                    </div>
            </div>
            )
    }
 


export default Mainfeed;