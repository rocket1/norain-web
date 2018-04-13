import React, {Component} from 'react';
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

    const markers = props.locations.map(loc => {
        const coord = loc.coord;
        return <Marker position={{lat: coord.latitude, lng: coord.longitude}}/>
    });

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
            {markers}
        </GoogleMap>)
}));

class MapComponent extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     *
     * @returns {*}
     */
    render() {

        // const markers = props.locations.map(loc => {
        //
        // });

        const chuck = 'wagon';

        return (

            <MyMapComponent

                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `700px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                locations={this.props.locations}

            />
        );
    }
}

export default MapComponent;
