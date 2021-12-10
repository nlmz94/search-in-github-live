import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import background from "./assets/bg.jpg";
import QuestionText from "./src/QuestionText";
import AnswerText from "./src/AnswerText";
import Constants from 'expo-constants';

export default function App() {
	const { extra: { API_URL } } = Constants.manifest
	const [username, setUsername] = useState("Dylan");
	const [user, setUser] = useState({});
	let imageDeProfile = '';
	imageDeProfile = user.avatar_url ? {uri: user.avatar_url} : require('./assets/avatar_placeholder.png');

	async function search() {
		try {
			const response = await fetch(`${API_URL}${username}`);
			const user = await response.json();
			setUser(user.data.user);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.container}>
			<Image source={imageDeProfile} style={{width: 250, height: 250}} />
			<div style={{ flexDirection:'row' }}>
				<TextInput style={styles.input} onChangeText={setUsername} value={username}/>
				<Button style={styles.button} onPress={search} title="Search" color={"#66D9EF"}/>
			</div>
			<Text>
				<QuestionText>ID {"\n"}</QuestionText><AnswerText>{user.id}</AnswerText>{"\n"}
				<QuestionText>Login {"\n"}</QuestionText><AnswerText>{user.login}</AnswerText>{"\n"}
				<QuestionText>Node ID {"\n"}</QuestionText><AnswerText>{user.node_id}</AnswerText>{"\n"}
				<QuestionText>URL {"\n"}</QuestionText><AnswerText>{user.html_url}</AnswerText>{"\n"}
				<QuestionText>Nom {"\n"}</QuestionText><AnswerText>{user.name}</AnswerText>{"\n"}
				<QuestionText>Entreprise: {"\n"}</QuestionText><AnswerText>{user.company}</AnswerText>{"\n"}
				<QuestionText>Blog {"\n"}</QuestionText><AnswerText>{user.blog}</AnswerText>{"\n"}
				<QuestionText>Adresse {"\n"}</QuestionText><AnswerText>{user.location}</AnswerText>{"\n"}
				<QuestionText>Email {"\n"}</QuestionText><AnswerText>{user.email}</AnswerText>{"\n"}
				<QuestionText>Embauchage {"\n"}</QuestionText><AnswerText>{user.hireable}</AnswerText>{"\n"}
				<QuestionText>Bio {"\n"}</QuestionText><AnswerText>{user.bio}</AnswerText>{"\n"}
				<QuestionText>Login Twitter {"\n"}</QuestionText><AnswerText>{user.twitter_username}</AnswerText>{"\n"}
				<QuestionText>Repos Publiques {"\n"}</QuestionText><AnswerText>{user.public_repos}</AnswerText>{"\n"}
				<QuestionText>Gists Publiques {"\n"}</QuestionText><AnswerText>{user.public_gists}</AnswerText>{"\n"}
				<QuestionText>Followers {"\n"}</QuestionText><AnswerText>{user.followers}</AnswerText>{"\n"}
				<QuestionText>Followings {"\n"}</QuestionText><AnswerText>{user.following}</AnswerText>{"\n"}
				<QuestionText>Date de création {"\n"}</QuestionText><AnswerText>{user.created_at}</AnswerText>{"\n"}
				<QuestionText>Date de màj {"\n"}</QuestionText><AnswerText>{user.updated_at}</AnswerText>{"\n"}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundImage: `url(${background})`,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		backgroundColor: '#000000',
		color: '#66D9EF',
		fontSize: 28
	}
});
