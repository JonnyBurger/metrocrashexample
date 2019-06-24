import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			{/**
				Start the app first with the line commented
				Then enable Live reload
				and uncomment the line below.
			*/}
			{/**
			<Image source={require('../../Assets/img.png')} />
			 */}
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
