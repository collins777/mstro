import React from "react";
import "./search-form.styles.scss";

class SearchForm extends React.Component {
  render() {
    return (
      <form id="search-form">
        <h1>Hello Search</h1>
        {/* Search Input */}
        <input
          className="search-input"
          id="search-input"
          type="text"
          name="name"
          placeholder="Search Topic.."
          required
        />

        {/* Dropdown for Sort By */}

        <div className="sort-container">
          <select
            className="select-input"
            name="sortby"
            id="sortby"
            placeholder="Sort by"
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
          <select className="select-input" name="limit" id="limit">
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
