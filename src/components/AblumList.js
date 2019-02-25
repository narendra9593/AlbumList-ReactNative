// import lib component 
import React, { Component } from 'react';
import {ScrollView } from 'react-native';
// import Api lib
import axios from 'axios';

// import custom component
import AblumDetails from './AblumDetails';



 // Make a Class base component 

class AblumList extends Component{

	// init state :
	 state = { ablumList:[] }

	// Method always call before render function call
	// get / post type of Requst
	// then - use to get response 
	// error - use for if any error 
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ ablumList: response.data }));
	}

	render() {
		console.log(this.state);
 		return (
 			<ScrollView>
 				{this.renderAblum()}
 			</ScrollView>
 		);
	}

	renderAblum(){
		return this.state.ablumList.map( ablumList =>
		 <AblumDetails key={ablumList.title} ablumList={ ablumList} />
		 );
	}

}

 /// Make componen available of other parts of App.

 export default AblumList;