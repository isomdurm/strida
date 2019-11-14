import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RouteDetail from './route_detail';

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	this.props.fetchRoutes();
  }

  componentDidUpdate() {
    console.log(Object.values(this.props.route));

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push('/feed');
  }

 	render() {
    const arr = Object.values(this.props.route);

    let routes = arr.map((route) => (
        <RouteDetail route={route} key={route.id}></RouteDetail>
    ));

    return (
      <div>
        { routes }  
      </div>
		) 
  }
}

export default Routes;
