import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
	const [username, setUsername] = useState("Dylan");
	const [user, setUser] = useState({});

	async function search() {
		try {
			const response = await fetch(`http://localhost:4242/api/users/${username}`);
			const user = await response.json();
			console.log(user.data);
			setUser(user.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				onChangeText={setUsername}
				value={username}
			/>

			<Button
				onPress={search}
				title="Search"
				color="#841584"
			/>

			<Text>{user.username}</Text>
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
