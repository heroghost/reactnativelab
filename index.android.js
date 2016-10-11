/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Greeting extends Component {
	render() {
		return (<Text>Hello {this.props.name}!</Text>);
	};
}

class Blink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showText : true
		};
		setInterval(()=>{
			this.setState({
				showText : !this.state.showText
			});
		}, 1000);
	}
	
	render() {
		let display = this.state.showText?this.props.text:' ';
		return (
			<Text>{display}</Text>
		);
	};
}

class helloworld extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Blink text="我可以闪烁，你能吗？" />
		<Greeting name="段鸿鹏"/>
		<Greeting name="李忠成"/>
		<Greeting name="刘世军"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('helloworld', () => helloworld);
