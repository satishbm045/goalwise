import React from 'react';
import './App.css';
import SearchBox from './Component/SearchBox/SearchBox';
import ItemShow from './Component/ItemShow/ItemShow';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedItem: []
		}
	}
	getSelectedItem = (e) =>{
		let previousData = this.state.selectedItem;
		previousData.push(e);
		this.setState({
			selectedItem: previousData
		})
	}
	getDeletedItem = (e,i) =>{
		let currentData = this.state.selectedItem;
		console.log(i);
		console.log(currentData);
		currentData.splice(i,1)
		this.setState({
			selectedItem: currentData
		})
	}
  	render() {
		console.log(this.state.selectedItem);
		return (
		<div className="App">
			<div className="container">
				<div className="heading">Select Funds To Invest In</div>
				<div className="content">
					<div className="searchHeading">Search</div>
					<div className="Box">
						<div className="leftBox">
							<SearchBox getSelectedItem = {this.getSelectedItem}/>
						</div>
						<div className="rightBox">
							<ItemShow items = {this.state.selectedItem} getDeletedItem={this.getDeletedItem}/>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
  	}
}

export default App;
