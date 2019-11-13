import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import mapboxgl from 'mapbox-gl';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
		lng: -122.486052,
		lat: 37.830348,
		zoom: 15
	};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	mapboxgl.accessToken = 'pk.eyJ1IjoiaXNvbWR1cm0iLCJhIjoiY2loNThoYXh3MDBoNnRza290enF6YWNobiJ9.gm2YkuDsq--gEyl1YGCL_g';

  	const map = new mapboxgl.Map({
		container: this.mapContainer,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [this.state.lng, this.state.lat],
		zoom: this.state.zoom
	});

	map.on('load', function () {
 
map.addLayer({
"id": "route",
"type": "line",
"source": {
"type": "geojson",
"data": {
"type": "Feature",
"properties": {},
"geometry": {
"type": "LineString",
"coordinates": [
[-122.48369693756104, 37.83381888486939],
[-122.48348236083984, 37.83317489144141],
[-122.48339653015138, 37.83270036637107],
[-122.48356819152832, 37.832056363179625],
[-122.48404026031496, 37.83114119107971],
[-122.48404026031496, 37.83049717427869],
[-122.48348236083984, 37.829920943955045],
[-122.48356819152832, 37.82954808664175],
[-122.48507022857666, 37.82944639795659],
[-122.48610019683838, 37.82880236636284],
[-122.48695850372314, 37.82931081282506],
[-122.48700141906738, 37.83080223556934],
[-122.48751640319824, 37.83168351665737],
[-122.48803138732912, 37.832158048267786],
[-122.48888969421387, 37.83297152392784],
[-122.48987674713133, 37.83263257682617],
[-122.49043464660643, 37.832937629287755],
[-122.49125003814696, 37.832429207817725],
[-122.49163627624512, 37.832564787218985],
[-122.49223709106445, 37.83337825839438],
[-122.49378204345702, 37.83368330777276]
]
}
}
},
"layout": {
"line-join": "round",
"line-cap": "round"
},
"paint": {
"line-color": "#888",
"line-width": 8
}
});
});

	const mapTwo = new mapboxgl.Map({
		container: this.mapContainerTwo,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [this.state.lng, this.state.lat],
		zoom: this.state.zoom
	});

	mapTwo.on('load', function () {
 
mapTwo.addLayer({
"id": "route",
"type": "line",
"source": {
"type": "geojson",
"data": {
"type": "Feature",
"properties": {},
"geometry": {
"type": "LineString",
"coordinates": [
[-122.48369693756104, 37.83381888486939],
[-122.48348236083984, 37.83317489144141],
[-122.48339653015138, 37.83270036637107],
[-122.48356819152832, 37.832056363179625],
[-122.48404026031496, 37.83114119107971],
[-122.48404026031496, 37.83049717427869],
[-122.48348236083984, 37.829920943955045],
[-122.48356819152832, 37.82954808664175],
[-122.48507022857666, 37.82944639795659],
[-122.48610019683838, 37.82880236636284],
[-122.48695850372314, 37.82931081282506],
[-122.48700141906738, 37.83080223556934],
[-122.48751640319824, 37.83168351665737],
[-122.48803138732912, 37.832158048267786],
[-122.48888969421387, 37.83297152392784],
[-122.48987674713133, 37.83263257682617],
[-122.49043464660643, 37.832937629287755],
[-122.49125003814696, 37.832429207817725],
[-122.49163627624512, 37.832564787218985],
[-122.49223709106445, 37.83337825839438],
[-122.49378204345702, 37.83368330777276]
]
}
}
},
"layout": {
"line-join": "round",
"line-cap": "round"
},
"paint": {
"line-color": "#888",
"line-width": 8
}
});
});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
    	<div className="feed-maps">
      <Col sm={{ span: 12 }} className="mapContainer">
		<div ref={el => this.mapContainer = el} className="mapContainer" />
	  </Col>

	  <Col sm={{ span: 12 }} className="mapContainerTwo">
		<div ref={el => this.mapContainerTwo = el} className="mapContainerTwo" />
	  </Col>
	  </div>
    );
  }
}

export default Feed;