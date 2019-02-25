// import lib for making Component

import React from 'react';
import { Text , View } from 'react-native';

// Make a component

const Header = (props) => {

	const {textStyle,viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style ={textStyle}>{props.headerText}</Text>
		</View>
	);
};

/// Creat Style for component

const styles = {

	viewStyle:{
		height:60,
		backgroundColor:'#fff',
		justifyContent:'center',
		alignItems:'center',
		padding:5,
		shadowColor: '#000',
		shadowOffset:{width:0,height:2},
		shadowOpacity:0.5,
		elevation: 2,
		position: 'relative'
	},
	textStyle:{
		fontSize: 20,
		fontWeight: "bold"
	}
};

/// Make the component available to other parts of the app
export default Header;