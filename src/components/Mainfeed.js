import React from 'react';

class Mainfeed extends React.Component {
    render(){
        return(
            <div className="row content">
                    <div className="col-sm-3 text-center">
                        left List
                    </div>
                    <div className="col-sm-6 text-center"> 
                          <h1>Welcome</h1>
                    </div>
                    <div className="col-sm-3 text-center ">
                          right List
                    </div>
            </div>
            )
    }
} 


export default Mainfeed;