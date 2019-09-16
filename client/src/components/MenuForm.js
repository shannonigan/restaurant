import React from 'react';
import { Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state= { name: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.name);
    this.setState({ name: "", });
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="name"
        label="Name"
        placeholder="Add new menu"
        requiredvalue={this.state.name}
        onChange={this.handleChange}
        />
      </Form>
    );
  };
};

export default MenuForm;