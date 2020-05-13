import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function MyScreen() {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 36 }}>Open up App.tsx to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
