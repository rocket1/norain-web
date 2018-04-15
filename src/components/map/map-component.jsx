import React from 'react';

const {compose, withProps, lifecycle} = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");

const API_KEY = 'AIzaSyA192RpHke8TJV1t7-4U4VV0pz36y9wBzo';
const defaultCenter = { // Portland
    lat: 45.5231,
    lng: -122.6765
};

const MapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `100%`, display: `flex`, flex: 1}}/>,
        mapElement: <div style={{height: `100%`, display: `flex`, flex: 1}}/>,
    }),
    lifecycle({
        componentWillMount() {
            const star = 'bar';
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => {

    const markers = props.nearbyLocations.map((loc, index) => {
        const coord = loc.coord;
        return <Marker key={index} position={{lat: coord.latitude, lng: coord.longitude}}/>
    });

    let options = {
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: window.google.maps.ControlPosition.LEFT_BOTTOM
        },
        zoom: 10
    };

    const center = 'location' in props && props.location ? {
        lat: props.location.coord.latitude,
        lng: props.location.coord.longitude
    } : null;

    if (center) {
        options.center = center;
    }

    return (
        <GoogleMap
            defaultCenter={defaultCenter}
            options={options}
        >
            {markers}
        </GoogleMap>
    )
});

export default MapComponent;
