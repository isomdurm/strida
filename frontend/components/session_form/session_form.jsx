import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push('/feed');
  }

  handleDemo(e) {
    e.preventDefault();

    this.setState({
      username: "demo@isom.tech",
      password: "password"
    });

    this.props.processForm(user);
    this.props.history.push('/feed');
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Row>
        <Col sm={{ span: 4, offset: 4 }} id="signin-container">
          <h2> {this.props.formType} </h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" value={this.state.username} onChange={this.update('username')} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
            </Form.Group>
      
            <Button variant="primary" type="submit" id="sign-in-button" value={this.props.formType}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SessionForm;
