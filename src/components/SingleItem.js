import React from 'react'


const SingleItem = ({item})=>{
      
    return(

            <div className="card">
              <img className="card-img-top" src={item.galleryURL} alt="Card image" /> 
              <div className="card-body">
                <h4 className="card-title"> {item.title[0].slice(0,25)}</h4>
                <p className="card-text">Some example text.</p>
                <a href={item.viewItemURL} className="btn btn-primary">See Profile</a>
              </div>
            </div>

        )
}

export default SingleItem;