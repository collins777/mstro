import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
//import Reddit from "../../reddit-data.js";
// reddit.search(searchTerm, searchLimit, sortBy)

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Your Brand: Marketing your Public Persona 101",
          imageUrl:
            "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2615&q=80",
          id: 1
        },
        {
          title: "Hughes storytelling for Marketeers: A complete guide",
          imageUrl:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
          id: 2
        },
        {
          title: "Interview with Josh Smith from IBM on Digital Transformation",
          imageUrl:
            "https://images.unsplash.com/photo-1562705121-e624542c7b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          id: 3
        },
        {
          title: "Storytelling for a Digital Age: How IBM turned the tide",
          imageUrl:
            "https://images.unsplash.com/photo-1488953994029-e6a7ba3348f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          id: 4
        },
        {
          title: "How Lifestyle brands connect digital with Generation Y",
          imageUrl:
            "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          id: 5
        },
        {
          title: "Content Strategy & how to get Management to Buy In",
          imageUrl:
            "https://images.unsplash.com/photo-1542328991-cab8c5d90d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          id: 6
        },
        {
          title: "Brand Storytelling - Template",
          imageUrl:
            "https://images.unsplash.com/photo-1563289141-935a1768a69c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80",
          id: 7
        },
        {
          title: "Storytelling - Template",
          imageUrl:
            "https://images.unsplash.com/photo-1452457779869-0a9ebbbdee99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2408&q=80",
          id: 8
        },
        {
          title: "How to become a Thought Leader in your Organization",
          imageUrl:
            "https://images.unsplash.com/photo-1576670159871-dd9d88d3f68b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2444&q=80",
          id: 9
        }
      ]
    };
  }

  render() {
    // Map through our sections array
    // Passing in each key / value pair with array destructuring
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
