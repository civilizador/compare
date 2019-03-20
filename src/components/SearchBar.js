import React from 'react';
import eBay from 'ebay-node-api';

let ebay = new eBay({
    clientID: process.env.REACT_APP_CLIENT_ID,
    // options  - optional HTTP request timeout to apply to all requests.
    env: "SANDBOX", // optional default = "PRODUCTION"
    limit: 6
})

class SearchBar extends React.Component {
    state={term:''};
    onInputChange = (e)=>{
        this.setState({term:e.target.value})
    }
    onSearchSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state.term)
        ebay.findItemsByKeywords(this.state.term).then((data) => {
            console.log(data); // fetches top 6 results in form of JSON.
        }, (error) => {
            console.log(error);
        });
    }
        
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>COMPARE</h1>
                    <form onSubmit={this.onSearchSubmit} className="form-inline">
                        <div className="input-group">
                            <input className="form-control" size="50" 
                                onChange={this.onInputChange} 
                                value={this.term}/>
                            <div className="input-group-btn">
                                <button  className="btn btn-danger">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            )        
    }
}


export default SearchBar

 