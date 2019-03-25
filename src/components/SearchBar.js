import React from 'react';

class SearchBar extends React.Component {
    state={term:'',price1:5,price2:1000}
    onPriceChange1 = (e) => {
        this.setState({price1:e.target.value}) 
    } 
    onPriceChange2 = (e) => {
        this.setState({price2:e.target.value})   
    } 
    onInputChange = (e)=>{
        this.setState({term:e.target.value})
    }
    onSearchSubmit = (e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term,this.state.price1,this.state.price2)
    }
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <div className="text-center">
                        <h1>COMPARE</h1>
                            <form onSubmit={this.onSearchSubmit} className="form-inline">
                                <div className="input-group mx-auto">
                                    <input className="form-control" size="80" 
                                        onChange={this.onInputChange} 
                                        value={this.term}/>
                                    <div className="input-group-btn">
                                        <button  className="btn btn-danger">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                <br />
                    <div id='priceRange' className="input-group mx-auto">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Price Range</span>
                          </div>
                          <input  onChange={this.onPriceChange1} 
                                type="number" className="form-control"  />
                          <input  onChange={this.onPriceChange2} 
                                type="number" className="form-control" />
                    </div>
                </div>
            </div>
            )        
    }
}


export default SearchBar

//  componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 console.log(position)
//                 this.setState({lat: position.coords.latitude});
//                 this.setState({lng: position.coords.longitude});
//              },
//             (err) => { 
//                  this.setState({errMessage: err.message});
//              }
//         )
//     }    
 
      
//         axios.get('https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=AsimSali-rightcho-PRD-379703086-c1b53a50&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&FILTER=price:[500-800]', {
//     params: {
//       keywords:'iPhone',
//       entriesPerPage:6,
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });