import React, { Component } from 'react';
import './App.css';


// function getUserById(id, list){
// 	let userName;
// 	list.forEach((row) => {
// 		if(row.id === id){
// 			userName = row.name;
// 		}
// 	})
// 	return userName;
// }
//
// function Payment(props) {
// 	props.expenses.map((row, index) => {
// 		return (
// 			<table style="width:100%">
// 				<tr>
// 					<th>what has been paid</th>
// 					<th>by whom?</th>
// 				</tr>
// 				<tr key={index}>
// 					<td>{row.what}</td>
// 					<td>{this.getUserById(row.who)}</td>
// 				</tr>
// 			</table>
// 		)
// 	})
// }

// singleRowValue(row){
// 	return(
// 		Object.values(row).map((ele) => {
// 			return <td>{ele}</td>
// 		})
// 	);
// }
//
// tableValue(tableObject){
// 	return(
// 		tableObject.map((row) => {
// 			return <tr key={Object.values(row)[0]}>{this.singleRowValue(row)}</tr>
// 		})
// 	);
// }

// function Payment(props) {
// 	let userName;
//
// 	props.expenses.map((eleExpense) => {
// 		props.users.forEach((eleUsers) => {
// 			if (eleExpense.who === eleUsers.id){
// 				userName = eleUsers.name;
// 			}
// 		});
//
// 		return (
// 			<li>{eleExpense.what}, {userName}</li>
// 		)
// 	})
// }

// App has `expenses` and `users` as props
class App extends Component {
	// return (
	// 	<div className="App">
	// 		<Payment expenses={this.props.expenses} users={this.props.users} />
	// 	</div>
	// );

	// let userName;
	//
	// this.props.expenses.map((eleExpense) => {
	// 	this.props.users.forEach((eleUsers) => {
	// 		if (eleExpense.who === eleUsers.id) {
	// 			userName = eleUsers.name;
	// 		}
	// 	});
	//
	//
	// 	return (
	// 		<div className="App">
	// 			<li>{eleExpense.what}, {userName}</li>
	// 		</div>
	// 	)
	// })

	findUserById(id, list){
		let userName = " ";
		list.forEach((row) => {
			if(row.id === id){
				userName = row.name;
			}
		})
		return userName? userName:"Nobody";
	}

	payment(props){
		let listPayment = [];
		let json = {};
		props.expenses.forEach((ele) => {
			json = {"what": ele.what, "who": this.findUserById(ele.who, props.users)};
			listPayment.push(json);
		})
		return (
			listPayment.map((row, index) => {
				return (
					<tr key={index}>
						<td>{row.what}</td>
						<td>{row.who}</td>
					</tr>
				)
			})
		);
	}

	render(){
		return (
			<div className="container">
				<table className="table table-striped table-bordered table-responsive-md table-condensed datatable">
					<thead className="thead-dark">
						<tr>
							<th>what has been paid</th>
							<th>by whom?</th>
						</tr>
					</thead>
					<tbody>
						{this.payment(this.props)}
					</tbody>
				</table>

			</div>
		);
	}
}



export default App;
