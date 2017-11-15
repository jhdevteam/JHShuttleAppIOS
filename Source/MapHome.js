
import React from "react";
import AppContainer from "./JHIndex";
import {store} from "./Store/Store";
export default class JHShuttleMap extends React.Component{
	renderApp(){
		return (
			<AppContainer store={store}/>			
		);
	}
	render(){
		
		return this.renderApp();
	}
}






