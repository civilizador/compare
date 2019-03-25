import React from 'react'


const SelectedItem = ({selectedItem})=>{
     if(!selectedItem){return(<h1>Loading...</h1>)}
     else{
           return(
                <div className="card" >
                  <img className="card-img-top" src={selectedItem.pictureURLSuperSize} alt="Card image" /> 
                  <div className="card-body">
                  <h5>${selectedItem.sellingStatus[0].currentPrice[0].__value__}</h5>
                    <h4 className="card-title"> {selectedItem.title[0].slice(0,25)}</h4>
                    <p className="card-text">Some example text.</p>
                    <a href={selectedItem.viewItemURL} className="btn btn-primary">See Item</a>
                  </div>
                </div> 
    
            )
     }
}

export default SelectedItem;


  
   