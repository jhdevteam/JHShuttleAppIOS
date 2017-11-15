import update from "react-addons-update";
import constants from "./Constants";
import RtData from "../API/RouteData";

//.........
// Constants
//........
const {PRESENT_POSITION,GET_LOCATION_DATA,GET_PICDROP_DATA,SHOW_HIDE_TIME,MATCHED_ROUTE_RESULT,
    SHOW_HIDE_RT,GET_PICK_DROP_TIME,REVERSE_PICK_DROP,GET_LOCATION_INDEX}=constants;
/// Actions
export function getPresentPosition()
{
    if ("geolocation" in navigator) {
  /* geolocation is available */
    return(dispatch)=>{
        navigator.geolocation.getCurrentPosition(
                //SuccessCallBack
                (position)=>{
                    //constructing return value dispatch
                    dispatch({
                        type:PRESENT_POSITION,
                        presentPosition:position
                    });
                },
                //ErrorCallBack
                (error)=>console.log(error.message),
                //Options PositionOption
                {
                    enableHighAccuracy:true,timeout:2000,maximunAge:2000
                }
        );
    } 
    }  
}

export function getRouteDetails()
{         
    //  LocationDetails =[  
    //     { 
    //       "RouteId":"LC0001",
    //       "TITLE": "North Station",
    //       "LAT": "0",
    //       "LONG": "0"
    //     },
    //     { 
    //       "RouteId":"LC0002",
    //       "TITLE": "601 Congress",
    //       "LAT": "1",
    //       "LONG": "1"
    //     },
    //     { 
    //       "RouteId":"LC0003",
    //       "TITLE": "State Street MBTA",
    //       "LAT": "2",
    //       "LONG": "2"
    //     },
    //     {
    //       "RouteId":"LC0004",
    //       "TITLE": "Back Bay",
    //       "LAT": "3",
    //       "LONG": "2"
    //     },
        
    //  ]
    LocationDetails = RtData.LocationDetails;
return(routeDetails)=>{  
        routeDetails(
            {
                type:GET_LOCATION_DATA,
                LocationDetail:LocationDetails
            }
        );
}
}

export function getDropPicLocation(DropPicLocation)
{
        return{
            type:GET_PICDROP_DATA,
            DropPicLocation:DropPicLocation
        }
}



export function toggleShowRouteTime(showHide)
{
        return{
            type:SHOW_HIDE_TIME,
            showHide:showHide
        }
}

export function toggleShowRouteDeatils(ViewRt)
{
        return{
            type:SHOW_HIDE_RT,
            showHideRt:ViewRt
        }
}

export function getRouteResult(pickupLocation,dropLocation)
{
    var  RouteData={};   
    var RouteDataArr = RtData.RouteDetails.filter(function(rt)
        {
            return (rt.START_POINT===pickupLocation && rt.END_POINT===dropLocation)
        }
        );

        if(Object.keys(RouteDataArr).length>0)
        {
            RouteData = RouteDataArr[0];
        }        
        return{
            type:MATCHED_ROUTE_RESULT,
            RouteResult:RouteData
        }
}

export function getPickDropTimeDetails(PickDropTime)
{
        return{
            type:GET_PICK_DROP_TIME,
            PickDropTime:PickDropTime
        }
}

export function reversePickDrop(that) {
      return{
            type:REVERSE_PICK_DROP,
            TogglePickDrop:that
        }
      
}

export function getLocationIndex(value) {
  var hh =[];
         picDropItems = RtData.LocationDetails.map((item) => {
          hh.push(item.TITLE)
        //return <Picker.Item key={item.RouteId.toString()} label={item.TITLE} />
        }); 
    for(var i = 0; i < hh.length; i++) {
        if(hh[i] === value) {
            return{
            type:GET_LOCATION_INDEX,
            GetLocIndex:i
        }
        }
    }
    return{
            type:GET_LOCATION_INDEX,
            GetLocIndex:-1
        } //to handle the case where the value doesn't exist
}

//Action Handlers
function handleGetCurrentPosition(state,action){
   return update(state,{
        region:{
           $set:action.presentPosition
        }
   })
}

function handlegetRouteDetails(state,action){
   return update(state,{
        LocationDetails:{
           $set:action.LocationDetail
        }
   })
}



function handleGetDropPicLocation(state,action){        
    var hh =[];
    let picDropItems = RtData.LocationDetails.map((item) => {
           hh.push(item.TITLE)            
        }); 
    return update(state,{
       pickDropData:{[action.DropPicLocation.key]:{
           $set:hh[action.DropPicLocation.value]
        }}
    }) 
}

function handleToggleShowRouteTime(state,action){
   return update(state,{
        ShowHide:{
           $set:action.showHide
        }
   })
}

function handletoggleShowRouteDeatils(state,action){
   return update(state,{
        showHideRt:{
           $set:action.showHideRt
        }
   })
}

function handleTgetRouteResult(state,action){
   return update(state,{
        RouteResult:{
           $set:action.RouteResult
        }
   })
}

function handleGetPickDropTimeDetails(state,action){
    return update(state,{
        PickDropTime:{
           $set:action.PickDropTime
        }
   })
}

function handlereversePickDrop(state,action){
    return update(state,{
        TogglePickDrop:{
           $set:action.TogglePickDrop
        }
   })
}

function handlegetLocationIndex(state,action){
    return update(state,{
        GetLocIndex:{
           $set:action.GetLocIndex
        }
   })
}

const ACTION_HANDLERS={
    PRESENT_POSITION  : handleGetCurrentPosition,
    GET_PICDROP_DATA  : handleGetDropPicLocation,
    GET_LOCATION_DATA : handlegetRouteDetails,
    SHOW_HIDE_TIME : handleToggleShowRouteTime,
    MATCHED_ROUTE_RESULT : handleTgetRouteResult,
    SHOW_HIDE_RT : handletoggleShowRouteDeatils,
    GET_PICK_DROP_TIME : handleGetPickDropTimeDetails,
    REVERSE_PICK_DROP : handlereversePickDrop,
    GET_LOCATION_INDEX : handlegetLocationIndex
}

const  initialState={
    //region={},
    pickDropData:{},
    ShowHide:{},
    RouteResult:[],
    showHideRt:{},
    PickDropTime:{},
    TogglePickDrop:'_click',
    //GetLocIndex:{}
};
//Reducer
export function MapReducer(state=initialState,action)
{
    const handler = ACTION_HANDLERS[action.type]
    return handler?handler(state,action):state; 
}