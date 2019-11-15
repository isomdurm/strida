import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class CreateRoute extends React.Component {
    constructor(props) {
    	super(props);
    
    	this.state = {
			lng: -122.486052,
			lat: 37.830348,
			zoom: 15,
			coordinates: []
		};

    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleRouteSkeleton = this.handleRouteSkeleton.bind(this);
  	}

 	componentDidMount() {
 		let that = this;

	  	mapboxgl.accessToken = 'pk.eyJ1IjoiaXNvbWR1cm0iLCJhIjoiY2loNThoYXh3MDBoNnRza290enF6YWNobiJ9.gm2YkuDsq--gEyl1YGCL_g';

	  	const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		});

		var draw = new MapboxDraw({
	  		displayControlsDefault: false,
	  		controls: {
	    		line_string: true,
	    		trash: true
	  		},
	  		styles: [{
	      		"id": "gl-draw-line",
	      		"type": "line",
	      		"filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
	      		"layout": {
	        		"line-cap": "round",
	        		"line-join": "round"
	      		},
	      		"paint": {
	        		"line-color": "#3b9ddd",
	        		"line-dasharray": [0.2, 2],
	        		"line-width": 4,
	        		"line-opacity": 0.7
	      		}
	    	}, {
	      		"id": "gl-draw-polygon-and-line-vertex-halo-active",
	      		"type": "circle",
	      		"filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
	      		"paint": {
	        		"circle-radius": 10,
	        		"circle-color": "#FFF"
	      		}
	    	}, {
	      		"id": "gl-draw-polygon-and-line-vertex-active",
	      		"type": "circle",
	      		"filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
	      		"paint": {
	        		"circle-radius": 6,
	        		"circle-color": "#3b9ddd",
	      		}
	    	}]
		});

		// add the draw tool to the map
		map.addControl(draw);

		function updateRoute() {
  			removeRoute(); // overwrite any existing layers
  			var data = draw.getAll();
  			var answer = document.getElementById('calculated-line');
  			var lastFeature = data.features.length - 1;
  			var coords = data.features[lastFeature].geometry.coordinates;
  			var newCoords = coords.join(';')
  			console.log(coords);
  			console.log("coords");
  			getMatch(newCoords);
		}

		function getMatch(e) {
			console.log("hereee");
	    	// https://www.mapbox.com/api-documentation/#directions
	    	var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + e +'?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
	    	var req = new XMLHttpRequest();
	    	req.responseType = 'json';
	    	req.open('GET', url, true);
	    	req.onload  = function() {
	      		var jsonResponse = req.response;
	      		var distance = jsonResponse.routes[0].distance*0.001; // convert to km
	      		var duration = jsonResponse.routes[0].duration/60; // convert to minutes
	      		// add results to info box
	      		document.getElementById('calculated-line').innerHTML = 'Distance: ' + distance.toFixed(2) + ' km<br>Duration: ' + duration.toFixed(2) + ' minutes';
	      		var coords = jsonResponse.routes[0].geometry;

	      		// add the route to the map
	      		addRoute(coords);
	    	};
	    	req.send();
		}

		function addRoute(coords) {
	  		// check if the route is already loaded
	  		if (map.getSource('route')) {
	    		map.removeLayer('route')
	    		map.removeSource('route')
	  		} else {
	    		map.addLayer({
	      			"id": "route",
	      			"type": "line",
	      			"source": {
	        			"type": "geojson",
	        			"data": {
	          				"type": "Feature",
	          				"properties": {},
	          				"geometry": coords
	        			}
	      			},
	      			"layout": {
	        			"line-join": "round",
	        			"line-cap": "round"
	      			},
	      			"paint": {
	        			"line-color": "#3b9ddd",
	        			"line-width": 8,
	        			"line-opacity": 0.8
	      			}
	    		});
	  		};

	  		updateCoords(coords, that);
		}

		function removeRoute() {
	  		if (map.getSource('route')) {
	    		map.removeLayer('route');
	    		map.removeSource('route');
	    		document.getElementById('calculated-line').innerHTML = '';
	  		} else  {
	    		return;
	  		}
		}

		function updateCoords(coords, that) {
			that.setState({
      			coordinates: coords.coordinates
    		});
		}

		map.on('click', updateRoute);

	};

	componentDidUpdate() {
		console.log(this.props);
	}

  	handleSubmit(e) {
    	e.preventDefault();
    	this.state.coordinates.forEach(coord => {
    		let full = { "route_id": Object.values(this.props.route)[0].id, "lat": coord[0], "long": coord[1]}
    		this.props.createCoordinate(full);
    	});
  	}

  	handleRouteSkeleton(e) {
  		e.preventDefault();
  		let route = { "owner_id": this.props.currentUser.id, "name": "isom", "route_type": "walking", "private": true, "description": "this is a test description" };
    	this.props.createRoute(route);
  	}

    render() {
    	const { coordinates } = this.state;

    	return (
			<div>
				<div ref={el => this.mapContainer = el} className="mapContainer" />
			
				<div className='info-box'>
					<Button id="coords" data-coordinates={coordinates} variant="primary" onClick={this.handleRouteSkeleton}>Create</Button>			
					<Button id="coords" data-coordinates={coordinates} variant="primary" id="create-route-button" onClick={this.handleSubmit}>Save</Button>
				</div>

				<div className='distance-box'>
					<div id='calculated-line'></div>				
				</div>
			</div>
    	);
  	}
}

export default CreateRoute;
