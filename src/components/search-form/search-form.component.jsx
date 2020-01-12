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

  handleInputChange = e => {
    // Sets the value of this.state.searchInput
    this.setState({
      searchInput: e.target.value
    });
  };

  handleSortChange = e => {
    this.setState({
      sortBy: e.target.value
    });
  };

  handleLimitChange = e => {
    this.setState({
      limit: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(
      `The search input value is ${this.state.searchInput} ${this.state.sortBy} ${this.state.limit}`
    );
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
          onChange={this.handleInputChange}
          value={this.state.searchInput}
          required
        />

        {/* Dropdown for Sort By */}

        <div className="sort-container">
          <select
            className="select-input"
            name="sortby"
            id="sortby"
            onChange={this.handleSortChange}
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
            onChange={this.handleLimitChange}
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
