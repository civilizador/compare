import React from 'react';
import eBay from 'ebay-node-api';
import axios from 'axios';
import convert from 'xml-js';
import SearchBar from './SearchBar'
import Mainfeed from './Mainfeed'

class App extends React.Component{
    state={country:'',lat:'',lng:'',ebayResults:[],price1:1,price2:100 }
    
    onPrice1Change = (price)=>{
        this.setState({price1:price});
        console.log(this.state.price1)
    }
    onPrice2Change = (price)=>{
        this.setState({price2:price});
        console.log(this.state.price2)
    }
    
    onSearchSubmit = (term)=>{
        axios.get('https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=AsimSali-rightcho-PRD-379703086-c1b53a50&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&paginationInput.entriesPerPage=6&paginationInput.pageNumber=2&REST-PAYLOAD&FILTER=price:[500-800]', {
            params: {
              keywords: term
             }
        })
        .then(  (response) =>{
        let result1 = response.data.findItemsByKeywordsResponse[0].searchResult[0].item
        console.log(result1);
         this.setState({ebayResults:result1});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <SearchBar onSearchSubmit = {this.onSearchSubmit} onPrice1Change={this.onPrice1Change} onPrice2Change={this.onPrice2Change} />
                <Mainfeed ebayResults={this.state.ebayResults} />
                <footer className="container-fluid text-center">
                  <p>Footer Text</p>
                </footer>
            </div>
        )
    }
    
}

export default App


