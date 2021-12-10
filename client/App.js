import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import background from "./assets/bg.jpg";
import QuestionText from "./src/QuestionText";
import AnswerText from "./src/AnswerText";

export default function App() {
	const [username, setUsername] = useState("Dylan");
	const [user, setUser] = useState({});
	let imageDeProfile = '';
	imageDeProfile = user.avatar_url ? {uri: user.avatar_url} : require('./assets/avatar_placeholder.png');

	async function search() {
		try {
			const response = await fetch(`http://localhost:4242/api/users/${username}`);
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
				<QuestionText>ID ==></QuestionText><AnswerText>{user.id}</AnswerText>{"\n"}
				<QuestionText>Login ==></QuestionText><AnswerText>{user.login}</AnswerText>{"\n"}
				<QuestionText>Node ID ==></QuestionText><AnswerText>{user.node_id}</AnswerText>{"\n"}
				<QuestionText>URL ==></QuestionText><AnswerText>{user.html_url}</AnswerText>{"\n"}
				<QuestionText>Lien d'image de profile ==></QuestionText><AnswerText>{user.avatar_url}</AnswerText>{"\n"}
				<QuestionText>Nom ==></QuestionText><AnswerText>{user.name ?? 'n/a'}</AnswerText>{"\n"}
				<QuestionText>Entreprise ==></QuestionText><AnswerText>{user.company}</AnswerText>{"\n"}
				<QuestionText>Blog ==></QuestionText><AnswerText>{user.blog}</AnswerText>{"\n"}
				<QuestionText>Adresse ==></QuestionText><AnswerText>{user.location}</AnswerText>{"\n"}
				<QuestionText>Email ==></QuestionText><AnswerText>{user.email}</AnswerText>{"\n"}
				<QuestionText>Embauchage ==></QuestionText><AnswerText>{user.hireable}</AnswerText>{"\n"}
				<QuestionText>Bio ==></QuestionText><AnswerText>{user.bio}</AnswerText>{"\n"}
				<QuestionText>Login Twitter ==></QuestionText><AnswerText>{user.twitter_username}</AnswerText>{"\n"}
				<QuestionText>Repos Publiques ==></QuestionText><AnswerText>{user.public_repos}</AnswerText>{"\n"}
				<QuestionText>Gists Publiques ==></QuestionText><AnswerText>{user.public_gists}</AnswerText>{"\n"}
				<QuestionText>Followers ==></QuestionText><AnswerText>{user.followers}</AnswerText>{"\n"}
				<QuestionText>Followings ==></QuestionText><AnswerText>{user.following}</AnswerText>{"\n"}
				<QuestionText>Date de création ==></QuestionText><AnswerText>{user.created_at}</AnswerText>{"\n"}
				<QuestionText>Date de màj ==></QuestionText><AnswerText>{user.updated_at}</AnswerText>{"\n"}
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
