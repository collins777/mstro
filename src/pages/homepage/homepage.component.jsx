import React from "react";
import Directory from "../../components/directory/directory.component";
import SearchFrom from "../../components/search-form/search-form.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <SearchFrom />
    <Directory />
  </div>
);

export default HomePage;
