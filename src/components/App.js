import React from 'react';
import SearchBar from './SearchBar'
import Mainfeed from './Mainfeed'

class App extends React.Component{
    render() {
        return (
            <div>
                <SearchBar />
                <Mainfeed />
                <footer className="container-fluid text-center">
                  <p>Footer Text</p>
                </footer>
            </div>
        )
    }
}

export default App