import React, {Component} from 'react';
import MapComponent from './components/map/map-component';
import SearchBox from './components/search-box/search-box';

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
        this._handleLocationChange = this._handleLocationChange.bind(this);
    }

    /**
     *
     * @param location
     * @private
     */
    _handleLocationChange(location) {
        this.setState(location);
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="app">
                <MapComponent location={this.state.location} nearbyLocations={this.state.nearbyLocations}/>
                <SearchBox onLocationChange={this._handleLocationChange}/>
            </div>
        );
    }
}

export default App;
