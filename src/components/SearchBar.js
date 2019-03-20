import React from 'react';

class SearchBar extends React.Component {
    
    onInputChange = (e)=>{
        this.setState({term:e.target.value})
    }
    onSearchSubmit = (e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
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