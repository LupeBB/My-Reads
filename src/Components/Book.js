import React from "react";

import { Link } from "react-router-dom";

import * as BooksAPI from "../BooksAPI";

class Book extends React.Component {
  render() {
    return (
      <li>
      <div className="book">
      <div className="book-top">
      <div className="book-cover"
      style={{ 
        width: 125, 
        height: 190,
        backgroundImage: // Creates book thumbnail url
        `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail: "Default url or none"},)`}}/>
     <div/>
  <div className="book-shelf-changer">
  <select value={this.props.book.shelf || "none"} onChange={e => {this.props.updateBook(this.props.book, e.target.value)} }>
     <option value="move" disabled> Move to...</option>
     <option value="currentlyReading">Currently Reading</option>
     <option value="wantToRead">Want to Read</option>
     <option value="read">Read</option>
     <option value="none">None</option>
    </select>
    </div>
  </div>
</div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors"> {(this.props.book.authors && this.props.book.authors[0]) || "No author..."} </div>
</li>
  );
 }
}
export default Book;
