
// import lib 
import React from 'react';
import {View,Text,Image , Linking} from 'react-native';
// import custom component
import Button from './Button'
import Card from './Card';
import CardSection from'./CardSection';

const AblumDetails = ({ablumList}) => {
// destructing property - use to good pratice not write every time props.ablumList.*
const { title, artist, thumbnail_image,image,url} = ablumList;
const { 
		thumbnailStyle,
 		headerContentStyle,
 		thumbnailContainerStyle,
 		headerTextStyle,
 		imageStyle
 	 } = styles;

	return(
			<Card>
				<CardSection>
				<View style = {thumbnailContainerStyle}>
					<Image 
					source = {{ uri: thumbnail_image }} 
					style = {thumbnailStyle} 
					/>
				</View>
				<View style = {headerContentStyle}>
					<Text style = {headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
				</CardSection> 

				<CardSection>
					<Image 
						source = {{ uri: image}}
						style = {imageStyle}
					/>
				</CardSection>

				<CardSection>
						<Button onPressDataPass={() => Linking.openURL(url)  }>
						Buy Now
						</Button>
				</CardSection>
			</Card>
		);

};
///
const styles = {
	headerTextStyle:{
		fontSize: 18,
		fontWeight: 'bold'
	},
	headerContentStyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle:{
		height: 50,
		width: 50
	},
	thumbnailContainerStyle:{
		justifyContent:'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10

	},
	imageStyle:{
		height: 300,
		flex: 1,
		width: null
	}

};

export default AblumDetails;