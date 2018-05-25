import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }
  // componentDidMount() {
  //   fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbn}8&format=json&jscmd=data`)
  //     .then(response => response.json())
  //     .then(bookData => {
  //       this.setState({book: Object.values(bookData)[0]})
  //     })
  // }

	componentDidUpdate(prevProps, prevState){
		fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbn}8&format=json&jscmd=data`)
			.then(response => response.json())
			.then(bookData => {
				console.log("prevState.book: ", prevState.book);
				if(prevProps.isbn !== this.props.isbn){
					this.setState({book: Object.values(bookData)[0]})
				}
			})
	}

  render() {
    return (
      <div>
        {this.state.book
          ? (
            <div>
              <div>{this.state.book.title}</div>
              <img src={this.state.book.cover.medium} alt="book"/>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Book;
