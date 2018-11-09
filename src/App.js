import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import MainShelf from "./Components/pages/MainShelf";

import SearchScreen from "./Components/pages/SearchScreen";

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MainShelf} />
        <Route exact path="/search" component={SearchScreen} />
      </div>
    );
  }
}

export default BooksApp;
