import React, {Component} from 'react';
import MapComponent from './components/map/map-component';

class App extends Component {

    state = {
        locations: []
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
            .then(res => res.json())
            .then(locs => {
                this.setState({
                    locations: locs
                });
            });
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div>

                <input type='text' id='search'/>
                <button onClick={this._doSearch}>Search</button>
                <MapComponent locations={this.state.locations}/>

            </div>
        );
    }
}

export default App;
