import React from "react";
import "./search-form.styles.scss";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      sortBy: "",
      limit: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // For testing purposes only
    alert(
      `The search input values are ${this.state.searchInput}, ${this.state.sortBy}, ${this.state.limit}`
    );

    // Search Reddit API with state data
    //prettier-ignore
    fetch(`http://www.reddit.com/search.json?q=${this.state.searchInput}&sort=${this.state.sortBy}&limit=${this.state.limit}`)
    .then(res => res.json()) // parse result into json data format
    .then(json => json.data.children.map(data => data.data))
    .then(myJson => console.log(myJson))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <h1>Hello Search</h1>
        {/* Search Input */}
        <input
          className="search-input"
          id="search-input"
          type="text"
          name="name"
          placeholder="Search Topic.."
          onChange={e => this.setState({ searchInput: e.target.value })}
          value={this.state.searchInput}
          required
        />

        {/* Dropdown for Sort By */}

        <div className="sort-container">
          <select
            className="select-input"
            name="sortby"
            id="sortby"
            onChange={e => this.setState({ sortBy: e.target.value })}
            value={this.state.sortBy}
          >
            <option selected disabled hidden>
              Sort By
            </option>
            <option value="relevance">Relevance</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* Dropdown for Limiting # of results*/}
        <div className="limit-container">
          <select
            className="select-input"
            name="limit"
            id="limit"
            onChange={e => this.setState({ limit: e.target.value })}
            value={this.state.limit}
          >
            <option selected disabled hidden>
              Limit Results
            </option>

            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>

        {/* Submit Button */}
        <input type="submit" />
      </form>
    );
  }
}

export default SearchForm;
