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
        this._handleSearch = this._handleSearch.bind(this);
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
     * @private
     */
    _handleSearch(searchState) {

        const term = searchState.term;
        const radius = searchState.radius;

        function handleErrors(response) {
            if (response.error) {
                throw Error(response.error);
            }
            return response;
        }

        fetch(`http://localhost:3000/?term=${term}&radius=${radius}`)
            .then(resRaw => resRaw.json())
            .then(handleErrors)
            .then(this._handleLocationChange)
            .catch(reason => {
                alert(reason.message);
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
                <SearchBox onSearch={this._handleSearch} onLocationChange={this._handleLocationChange}/>
            </div>
        );
    }
}

export default App;
