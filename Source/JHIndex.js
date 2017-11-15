
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import HomeContainer from "./Container/HomeContainer";


export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	render(){
    
		return (
			  <Provider store={this.props.store}>
			 	<HomeContainer/>
			 </Provider> 
			);
	}
}