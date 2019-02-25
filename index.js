
// import a lib to help create a component
import React from 'react';
import {View , AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// custome component 

import Header from './src/components/header';
import AblumList from './src/components/AblumList';

//Create a component
const App = () => (
	<View style = {{ flex:1 }}>
		<Header headerText={'Music Album'} />
		<AblumList/>
	</View>
);

/// Render it device

AppRegistry.registerComponent( appName , () => App); 