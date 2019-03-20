import React from 'react';
import eBay from 'ebay-node-api';
import axios from 'axios';
import convert from 'xml-js';
import SearchBar from './SearchBar'
import Mainfeed from './Mainfeed'
let ebay = new eBay({
    clientID: process.env.REACT_APP_PROD_CLIENT_ID,
    // options  - optional HTTP request timeout to apply to all requests.
    // env: "SANDBOX", // optional default = "PRODUCTION"
    limit: 6,
    filter: { price: "[300..800]", priceCurrency: "USD", conditions: "NEW",deliveryCountry: "US",
                itemLocationCountry: "US",buyingOptions: 'FIXED_PRICE' }
})

class App extends React.Component{
    state={country:'',lat:'',lng:'', ebayResults:[]}
    onSearchSubmit = (term)=>{
        ebay.findItemsByKeywords(term).then((data) => {
            this.setState({ebayResults:data[0].searchResult[0].item});
            console.log(this.state.ebayResults); 
        }, (error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <SearchBar onSearchSubmit = {this.onSearchSubmit} />
                <Mainfeed ebayResults={this.state.ebayResults} />
                <footer className="container-fluid text-center">
                  <p>Footer Text</p>
                </footer>
            </div>
        )
    }
    
}

export default App



// axios.get('https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=AsimSali-rightcho-PRD-379703086-c1b53a50&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=parseResults&REST-PAYLOAD&FILTER=price:[500-800]', {
//             params: {
//               keywords:'iPhone',
//               entriesPerPage:6,
//             }
//         })
//         .then(function parseResults(response) {
//         //   let result1 = convert.xml2json(response.data, {compact: true, spaces: 4});
//         console.log(response.data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });