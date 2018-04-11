import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644}}
    >
        {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
    </GoogleMap>)));

class App extends Component {

    _doSearch() {
        fetch('http://localhost:3001/?term=Carlsbad&pretty=1&radius=10')
            .then(res => {
                console.log(res);
            });
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="App">

                <input type='text' id='search'/>
                <button onClick={this._doSearch}>Search</button>
                <MyMapComponent

                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

                    isMarkerShown/>// Map with a Marker

            </div>
        );
    }
}

export default App;
