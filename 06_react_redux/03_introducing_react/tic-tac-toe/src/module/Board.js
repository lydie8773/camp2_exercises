// import React from 'react';
import React, { Component } from 'react';
// import Square from "./Square";
import "../index.css"

function Square(props) {
	return(
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends Component{
	constructor(props){
		super(props);
		this.state = {
			size: 5
			// squares: Array(9).fill(null)
		}
	}

	renderSquare(i){
 		// return(
 		// 	<Square
		// 		value={this.props.squares[i]}
		// 	/>
		// );

		return <Square key={i}
									 hightlight = {this.props.winner && this.props.winner.includes(i)}
									 value={this.props.squares[i]}
									 onClick={()=>this.props.onClick(i)}/>;
 	}

	renderBoardRow(j) {
		let element =[];
		for(let i = 0 ; i<this.state.size ; i++) {
			element.push(this.renderSquare(j+i));
		}
		return (
			<div className ="board-row" key = {j}>
				{element}
			</div>
		);
	}

	render() {
		let element =[];
		for(let i = 0 ; i<this.state.size ; i++) {
			element.push(
				this.renderBoardRow(
					i * this.state.size
				)
			);
		}
		return (
			<div>{element}</div>
		);
	}

	// render() {
	// 	return (
	// 		<div>
	// 			<div className="board-row">
	// 				{this.renderSquare(0)}
	// 				{this.renderSquare(1)}
	// 				{this.renderSquare(2)}
	// 			</div>
	// 			<div className="board-row">
	// 				{this.renderSquare(3)}
	// 				{this.renderSquare(4)}
	// 				{this.renderSquare(5)}
	// 			</div>
	// 			<div className="board-row">
	// 				{this.renderSquare(6)}
	// 				{this.renderSquare(7)}
	// 				{this.renderSquare(8)}
	// 			</div>
	// 		</div>
	// 	);
	// }
}


// class Board extends Component {
//
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			order: 5
// 		};
// 	}
//
// 	renderSquare(i) {
// 		return <Square key={i}
// 									 hightlight = {this.props.winner && this.props.winner.includes(i)}
// 									 value={this.props.squares[i]}
// 									 onClick={()=>this.props.onClick(i)}/>;
// 	}
//
// 	renderBoardRow(j) {
// 		let element =[];
// 		for(let i = 0 ; i<this.state.order ; i++) {
// 			element.push(this.renderSquare(j+i));
// 		}
// 		return (<div className ="board-row" key = {j}>{element}</div>);
// 	}
//
// 	render() {
// 		let element =[];
// 		for(let i = 0 ; i<this.state.order ; i++) {
// 			element.push(this.renderBoardRow(i * this.state.order));
// 		}
// 		return (<div>{element}</div>);
// 	}
// }

export default Board;