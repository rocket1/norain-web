import React, {Component} from 'react';
import MapComponent from './components/map/map-component';
import './app.css';

class App extends Component {

    state = {
        location: null,
        nearbyLocations: []
    };

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this._doSearch = this._doSearch.bind(this);
    }

    /**
     *
     * @private
     */
    _doSearch() {
        fetch('http://localhost:3000/?id=5334223')
            .then(resRaw => resRaw.json())
            .then(res => {
                this.setState(res);
            });
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="app">

                <MapComponent location={this.state.location} nearbyLocations={this.state.nearbyLocations}/>

                <div className="search-box">
                    <div className="search">
                        <input type='text' id='search'/>
                        <button onClick={this._doSearch}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
