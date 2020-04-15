import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { name, number } = this.state;
    this.props.onSubmit({ ...this.state, id: shortid.generate() });

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Number
          <br />
          <input
            type="tel"
            placeholder="input phone number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
