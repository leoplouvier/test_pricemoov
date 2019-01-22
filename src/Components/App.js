import React, { Component } from "react";
import Dropdown from "./Dropdown";

class App extends Component {
  state = {
    agencie: "",
    cat: "",
    agencies: [],
    categories: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount = () => {
    fetch("http://5ae97684531a58001414278c.mockapi.io/agencies")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.parse(JSON.stringify(data)))
        this.setState({agencies:JSON.parse(JSON.stringify(data))});
      });
  };

  render() {
    return (
      <div className="App">
        <div id="agencies">
        Agencies :
          <Dropdown
            value={this.state.agencie}
            name="agencie"
            id="agenciesDropDown"
            items={this.state.agencies}
            handleChange = {this.handleChange}
          />
        </div>
        <div id="cat">
        Categories :
          <Dropdown
            value={this.state.cat}
            name="categories"
            id="catDropDown"
            items={this.state.categories}
          />
        </div>
      </div>
    );
  }
}

export default App;
