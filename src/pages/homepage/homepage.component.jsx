import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
import SearchFrom from "../../components/search-form/search-form.component";

const HomePage = () => (
  <div className="homepage">
    <SearchFrom />
    <Directory />
  </div>
);

export default HomePage;
