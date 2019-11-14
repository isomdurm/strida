import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Feed extends React.Component {
    constructor(props) {
    	super(props);
    
    	this.state = {
			lng: -122.486052,
			lat: 37.830348,
			zoom: 15,
			coordinates: []
		};

    	this.handleSubmit = this.handleSubmit.bind(this);
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

		var geojson = {
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"properties": {
						"message": "Foo",
						"iconSize": [60, 60]
					},
					"geometry": {
						"type": "Point",
						"coordinates": [-122.49378204345702, 37.83368330777276]
					}
				}, {
					"type": "Feature",
					"properties": {
						"message": "Bar",
						"iconSize": [50, 50]
					},
					"geometry": {
						"type": "Point",
						"coordinates": [-122.49223709106445, 37.83337825839438]
					}
				}, {
					"type": "Feature",
					"properties": {
						"message": "Baz",
						"iconSize": [40, 40]
					},
					"geometry": {
						"type": "Point",
						"coordinates": [-63.29223632812499, -18.28151823530889]
					}
				}
			]
		};

		geojson.features.forEach(function(marker) {
			// create a DOM element for the marker
			var el = document.createElement('div');
			el.className = 'marker';
			el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
			el.style.width = marker.properties.iconSize[0] + 'px';
			el.style.height = marker.properties.iconSize[1] + 'px';
	 
			el.addEventListener('click', function() {
				window.alert(marker.properties.message);
			});
	 
			// add marker to map
			new mapboxgl.Marker(el)
				.setLngLat(marker.geometry.coordinates)
				.addTo(map);
		});

		map.on('click', function (e) {

			new mapboxgl.Marker(e)
				.setLngLat(e.lngLat)
				.addTo(map);
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

  	handleSubmit(e) {
    	e.preventDefault();
    	console.log(this.state.coordinates);

    	console.log("try");

    	this.state.coordinates.forEach(coord => {
    		let full = { "route_id": 1, "lat": coord[0], "long": coord[1]}
    		this.props.createCoordinate(full);
    	});

	    let route = { "owner_id": 1, "name": "isom", "route_type": "walking", "private": true, "description": "this is a test description" };
    	this.props.createRoute(route);
  	}

    render() {
    	const { coordinates } = this.state;

    	return (
			<div>
				<div ref={el => this.mapContainer = el} className="mapContainer" />
			
				<div className='info-box'>
					<p>Draw your route using the draw tools (25 points max)</p>
					<Button id="coords" data-coordinates={coordinates} variant="primary" id="create-route-button" onClick={this.handleSubmit}></Button>
					<div id='calculated-line'></div>				
				</div>
			</div>
    	);
  	}
}

export default Feed;
