import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';





class DogApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlPic: ""
		};
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount (){
		fetch("https://random.dog/woof.json", {
			method: "GET"
		})
			.then((response) => response.json())
			.then((data) => {
					console.log("data", data.url);
					this.setState({
						urlPic: data.url
					})
			})
	}


  render() {
    return (
      <div className="App">
				<button onClick={this.componentDidMount}>Change image</button>
				{
					this.state.urlPic ?
						(<img src={this.state.urlPic} alt="pic"></img>) : null
				}
      </div>
    );
  }
}

export default DogApp;
