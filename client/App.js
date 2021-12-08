import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import background from "./assets/bg.jpg";
import QuestionText from "./src/QuestionText";
import AnswerText from "./src/AnswerText";
import ViewabilityHelper from "react-native-web/dist/vendor/react-native/ViewabilityHelper";

export default function App() {
	const [username, setUsername] = useState("Dylan");
	const [user, setUser] = useState({});

	async function search() {
		try {
			const response = await fetch(`http://localhost:4242/api/users/${username}`);
			const user = await response.json();
			console.log(user.data.user);
			setUser(user.data.user);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.container}>
			<div style={{ flexDirection:'row' }}>
				<TextInput style={styles.input} onChangeText={setUsername} value={username} color="#00ff00"/>
				<Button onPress={search} title="Search" color="#000000"/>
			</div>
			<Text>
				<QuestionText>ID ==></QuestionText><AnswerText>{user.id}</AnswerText>{"\n"}
				<QuestionText>Login ==></QuestionText><AnswerText>{user.login}</AnswerText>{"\n"}
				<QuestionText>Node ID ==></QuestionText><AnswerText>{user.node_id}</AnswerText>{"\n"}
				<QuestionText>URL ==></QuestionText><AnswerText>{user.html_url}</AnswerText>{"\n"}
				<QuestionText>Nom ==></QuestionText><AnswerText>{user.name}</AnswerText>{"\n"}
				<QuestionText>Entreprise ==></QuestionText><AnswerText>{user.company}</AnswerText>{"\n"}
				<QuestionText>Blog ==></QuestionText><AnswerText>{user.blog}</AnswerText>{"\n"}
				<QuestionText>Adresse ==></QuestionText><AnswerText>{user.location}</AnswerText>{"\n"}
				<QuestionText>Email ==></QuestionText><AnswerText>{user.email}</AnswerText>{"\n"}
				<QuestionText>Embauchage ==></QuestionText><AnswerText>{user.hireable}</AnswerText>{"\n"}
				<QuestionText>Bio ==></QuestionText><AnswerText>{user.bio}</AnswerText>{"\n"}
				<QuestionText>Login Twitter ==></QuestionText><AnswerText>{user.twitter_username}</AnswerText>{"\n"}
				<QuestionText>Repos Publics ==></QuestionText><AnswerText>{user.public_repos}</AnswerText>{"\n"}
				<QuestionText>Gists Publics ==></QuestionText><AnswerText>{user.public_gists}</AnswerText>{"\n"}
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
		color: '#00ff00',
		fontSize: 28
	}
});
