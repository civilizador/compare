import React from 'react'


const SingleItem = ({item,onItemSelect})=>{
  
    return(

            <div className="card" onClick={() => onItemSelect(item)} >
              <image className="card-img-top" src={item.pictureURLSuperSize} alt="Card image" /> 
              <div className="card-body">
              <h5>${item.sellingStatus[0].currentPrice[0].__value__}</h5>
                <h4 className="card-title"> {item.title[0].slice(0,25)}</h4>
                <p className="card-text">Some example text.</p>
                <a href={item.viewItemURL} className="btn btn-primary">See Item</a>
              </div>
            </div>

        )
}

export default SingleItem;