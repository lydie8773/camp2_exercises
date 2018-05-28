import React, { Component } from 'react';
import {products} from "./ProductData";
import _ from "underscore";

class ProductTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			sorter: " ",
			desc: false
		};
		// this.handleClick = this.handleClick.bind(this);
	}

	/**********Table Header**********/
	headerKey(tableObject){
		return (
			Object.keys(
				tableObject[0]).map(
					function (key) {
						return <th onClick={() => this.handleClick(key)} scope="col">{key}</th>
					}.bind(this)
				)
		)
	}

	renderHeader(){
		return(
			<tr>{this.headerKey(products)}</tr>
		)
	}

	/************Table Body************/
	singleRowValue(row){
		return(
			Object.values(row).map((ele) => {
				return <td>{ele}</td>
			})
		);
	}

	tableValue(tableObject){
		return(
			tableObject.map((row) => {
				return <tr key={Object.values(row)[0]}>{this.singleRowValue(row)}</tr>
			})
		);
	}

	renderBody(){
		return(
			<tbody>{this.tableValue(this.getProducts())}</tbody>
		);
	}

	/******************Click*******************/
	handleClick(newSorter){
		this.setState({
			sorter: newSorter,
			desc: (newSorter === this.state.sorter) && !this.state.desc
		});
	}

	/******************Sort get products*******************/
	getProducts() {
		const prod = _.sortBy(products, this.state.sorter);
		return this.state.desc ? prod.reverse() : prod;
	}

	render(){
		return(
			<div className="container">
				<table className="table table-striped table-bordered table-responsive-md table-condensed datatable"
							 data-toggle="table"
							 data-search="true"
							 data-filter-control="true"
							 data-show-export="true"
							 data-click-to-select="true"
							 data-toolbar="#toolbar">
					<thead className="thead-dark">{this.renderHeader()}</thead>
					{this.renderBody()}
				</table>
			</div>
		)
	}
}



export default ProductTable;