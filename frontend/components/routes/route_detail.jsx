import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class RouteDetail extends React.Component {
	constructor(props) {
    	super(props);
    	const { name, description } = this.props.route;
    	const { lat, long } = this.props.route.coordinates[0];

    	this.state = {
			lng: lat,
			lat: long,
			zoom: 14,
			distance: "0",
			duration: "0"
		};
  	}

  	componentDidMount() {
  		const that = this;

  		const routeCoords = Object.values(this.props.route.coordinates);
  		const coordsArr = [];

  		const dividedCoords = Math.ceil(routeCoords.length/25);


  		routeCoords.map((coord, index) => {

  			if (index % dividedCoords === 0) {
  				coordsArr.push([coord.lat, coord.long]);
  			}
  		})


  		mapboxgl.accessToken = "pk.eyJ1IjoiaXNoYW1kdXJtIiwiYSI6ImNrMnp0dzdiejBtbDMzbnB3cWl4czJtZ24ifQ.vwwE5NTEzmLwn_Q32O9U2A";

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
							"coordinates": coordsArr
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

			var newCoords = coordsArr.join(';')

			getMatch(newCoords, that);
		});

		function getMatch(e, that) {
	    	// https://www.mapbox.com/api-documentation/#directions
	    	console.log('here')
	    	var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + e +'?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
	    	var req = new XMLHttpRequest();
	    	req.responseType = 'json';
	    	req.open('GET', url, true);
	    	req.onload  = function() {
	      		var jsonResponse = req.response;
	      		console.log(jsonResponse);
	      		var distance = jsonResponse.routes[0].distance*0.001; // convert to km
	      		var duration = jsonResponse.routes[0].duration/60; // convert to minutes
	      		// add results to info box
	      		that.setState({
	      			distance: distance,
	      			duration: duration
	      		})

	      		console.log(that.state);

	    	};
	    	req.send();
		}
	};

	render() {
		const { lat, long, name, description } = this.props.route;

  		return (
    		<Card style={{width: '18rem'}}>
 				<div ref={el => this.mapContainer = el} className="mapContainer" />
				<Card.Body>
					<Card.Title>{ name }</Card.Title>
					<Card.Text>
  						{ description }
					</Card.Text>
					<Card.Text>
  						{ this.state.distance }
					</Card.Text>
					<Card.Text>
  						{ this.state.duration }
					</Card.Text>
				</Card.Body>
			</Card>    
  		);
  	};
};

export default RouteDetail;
