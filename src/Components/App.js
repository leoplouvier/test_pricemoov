import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Price from "./Price";

class App extends Component {
  state = {
    agencie: "",
    categorie: "",
    agencies: [],
    categories: [],
    disableCat: true,
    prices: []
  };

  fetchData = async url => {
    var response = await fetch(url)
    var json = await response.json()
    var data =JSON.parse(JSON.stringify(json))
    return data
  }

  handleChange = async event => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "agencie") {
      var id = this.state.agencies.find(a => a.name === event.target.value).id;
      var categories = await this.fetchData("http://5ae97684531a58001414278c.mockapi.io/agencies/"+id+"/categories")
      this.setState({ categories: categories, disableCat:false });
    }
    if (event.target.name === "categorie") {
      var aid = this.state.agencies.find(a => a.name === this.state.agencie).id;
      var cid = this.state.categories.find(c => c.name === event.target.value).id;
        var prices = await this.fetchData("http://5ae97684531a58001414278c.mockapi.io/agencies/"+aid+"/categories/"+cid+"/prices")
        this.setState({ prices: prices });
    }
  };

  componentDidMount = async () => {
    var agencies = await this.fetchData("http://5ae97684531a58001414278c.mockapi.io/agencies")
        this.setState({ agencies: agencies });
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
            handleChange={this.handleChange}
          />
        </div>
        <div id="cat">
          Categories :
          <Dropdown
            disabled={this.state.disableCat}
            value={this.state.categorie}
            name="categorie"
            id="catDropDown"
            items={this.state.categories}
            handleChange={this.handleChange}
          />
        </div>
        {this.state.prices !== [] &&
          this.state.prices.map(p => {
            return (
              <Price
                key={p.id}
                date={p.startDate}
                price={p.price}
                suggestedPrice={p.suggestedPrice}
                validated={p.isValidated}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
