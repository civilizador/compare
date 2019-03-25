import React from 'react';
import eBay from 'ebay-node-api';
import axios from 'axios';
import convert from 'xml-js';
import SearchBar from './SearchBar'
import Mainfeed from './Mainfeed'

 let p1='itemFilter(0).name=MinPrice&',
   p2='itemFilter(0).value=1.00&',
   p3='itemFilter(0).paramName=Currency&',
   p4='itemFilter(0).paramValue=USD&',
   p9='itemFilter(0).paramName=buyingOptions&',
   p10='itemFilter(0).paramValue=FIXED_PRICE&',
   p5='itemFilter(1).name=MaxPrice&',
   p6='itemFilter(1).value=100.00&',
   p7='itemFilter(1).paramName=Currency&',
   p8='itemFilter(1).paramValue=USD&'
let url;
   
   
class App extends React.Component{
    state={country:'',lat:'',lng:'',ebayResults:[],selected:null}
    componentDidMount(){
        this.onSearchSubmit('applewatch',1.00,999.00)
    }
    onSearchSubmit = async (term,...price)=>{
        p2 = await `itemFilter(0).value=${price[0]}.00&`;
        p6 = await `itemFilter(1).value=${price[1]}.00&`;
        url = await `https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=${process.env.REACT_APP_SECURITY_APPNAME}&OPERATION-NAME=findItemsByKeywords&REST-PAYLOAD&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&${p1}${p2}${p3}${p4}${p5}${p6}${p7}${p8}${p9}${p10}`;
        console.log(p2,p6);
        axios.get(`${url}paginationInput.entriesPerPage=16&outputSelector=PictureURLSuperSize&paginationInput.pageNumber=1`, {
            params: {
              keywords: term,
            }
        })
        .then(  (response) =>{
        let newResult = response.data.findItemsByKeywordsResponse[0].searchResult[0].item
        let result1 = newResult.filter((item)=>{return item.pictureURLSuperSize!=undefined} )
        console.log(result1,newResult);
        
         this.setState({ebayResults:result1});
         this.setState({selected:this.state.ebayResults[0]})
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    onItemSelect = async (selectedItem) => {
        await this.setState({selected:selectedItem})
        console.log('Selected Video',this.state.selected )
    }
    
    render() {
        return (
            <div>
                <SearchBar onSearchSubmit = {this.onSearchSubmit} onPrice1Change={this.onPrice1Change} onPrice2Change={this.onPrice2Change} />
                <Mainfeed ebayResults={this.state.ebayResults} onItemSelect={this.onItemSelect} selectedItem={this.state.selected}/>
                <footer className="container-fluid text-center">
                  <p>Footer Text</p>
                </footer>
            </div>
        )
    }
    
}

export default App


