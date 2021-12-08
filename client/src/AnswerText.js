import React from 'react';
import {Text, StyleSheet,} from 'react-native';

export default class AnswerText extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text style={[styles.defaultStyle, this.props.style]}>
				{this.props.children}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	defaultStyle: {
		fontStyle: "italic",
		fontSize: 18,
		color: "#00ff00"
	},
});