import React, { Component } from "react";
import Dropdown from "./Dropdown";

class App extends Component {
  state = {
    agencie: "",
    cat: "",
    agencies: [],
    categories: [],
    disableCat: true
  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
    if(event.target.name === "agencie"){
      var id =this.state.agencies.find(a=>a.name===event.target.value).id
      fetch("http://5ae97684531a58001414278c.mockapi.io/agencies/"+id+"/categories")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.parse(JSON.stringify(data)))
        this.setState({categories:JSON.parse(JSON.stringify(data))});
      });
    }
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
          disabled={false}
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
          disabled={this.state.disableCat}
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
