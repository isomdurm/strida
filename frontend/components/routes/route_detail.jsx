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

    	console.log(this.props.route.coordinates[0]);

    	this.state = {
			lng: lat,
			lat: long,
			zoom: 13
		};
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
				</Card.Body>
			</Card>    
  		);
  	};
};

export default RouteDetail;
