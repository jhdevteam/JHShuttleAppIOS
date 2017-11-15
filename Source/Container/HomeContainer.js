import React, { Component } from 'react';
//import {Container} from "native-base";
import Home from "../Components/Home";
import {connect} from "react-redux";
import {
    getPresentPosition,
    getRouteDetails,
    getDropPicLocation,
    toggleShowRouteTime,
    getRouteResult,
    toggleShowRouteDeatils,
    getPickDropTimeDetails,
    reversePickDrop,
    getLocationIndex,
    MapModule
} from "../Modules/MapModule";
const mapStateToProps = (state) => ({  
  //region:state.region,
  pickDropData : state.MapReducer.pickDropData,
  //LocatioDetails:state.LocationDetails,
  LocatioDetails:state.MapReducer.LocationDetails,
  ShowHide:state.MapReducer.ShowHide,
  RouteResult:state.MapReducer.RouteResult,
  showHideRt:state.MapReducer.showHideRt,
  PickDropTime:state.MapReducer.PickDropTime,
  TogglePickDrop:state.MapReducer.TogglePickDrop||'_click',
  GetLocIndex:state.MapReducer.GetLocIndex 
});
const mapDispatchToProps = {  
    getPresentPosition,
    getDropPicLocation, 
    getRouteDetails,
    toggleShowRouteTime,
    getRouteResult,
    toggleShowRouteDeatils,
    getPickDropTimeDetails,
    reversePickDrop,
    getLocationIndex
};

const AppContainer =connect(mapStateToProps,mapDispatchToProps)(Home); 
export default AppContainer;