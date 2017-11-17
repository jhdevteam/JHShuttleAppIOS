import React,{Component} from "react";
import { StyleSheet, Text, Dimensions, Picker, View } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import { Tabs, Tab, Icon , SocialIcon, Header, Avatar} from 'react-native-elements';
import renderIfElse from './renderIfElse';
import renderIf from './renderIf';
import Crashes from "mobile-center-crashes";
export const PicDropLoc=({picDropDetails,getDropPicLocation,avtarSource,reversePickDrop,pickDropData,RouteResult})=>
{
  
  var hh =[];
        let picDropItems = picDropDetails.map((item) => {
          hh.push(item.TITLE)
        //return <Picker.Item key={item.RouteId.toString()} label={item.TITLE} />
        }); 

  function getIndex(value) {
    for(var i = 0; i < hh.length; i++) {
        if(hh[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

if(RouteResult)
  {
    var defaultPicIndex =getIndex(RouteResult.START_POINT);
    var defaultPicValue =RouteResult.START_POINT;  

    var defaultDropIndex =getIndex(RouteResult.END_POINT);
    var defaultDropValue = RouteResult.END_POINT;
  }
  

  
  function togglePickDrop(val){  
        if(pickDropData.pickUp && pickDropData.dropOff)
        {
          let  dropOf = pickDropData.dropOff;
          var pickIdx=getIndex(pickDropData.dropOff)
          _dropdown_Pickup_select(pickIdx);
          var dropIdx=getIndex(pickDropData.pickUp)
          _dropdown_Drop_select(dropIdx);
          
          bindPicDrop("pickUp",pickIdx)
          bindPicDrop("dropOff",dropIdx)
          reversePickDrop(val)
        }
  }

  function _dropdown_Pickup_select(idx) {
    this._dropdown_Pickup && this._dropdown_Pickup.select(idx);
  }

  function _dropdown_Drop_select(idx) {
    this._dropdown_Drop && this._dropdown_Drop.select(idx);
  }

  function bindPicDrop(key, val){  
	 getDropPicLocation({
			key,
			value:val
		}); 	
  }
  
  return(
     <View style={styles.ModalDroDownContainer}>
        <View style={{flexDirection:'column', width: 44}}>
          <View style={{backgroundColor:'#fff'}}>
              {(avtarSource == '_click')&&  
              <Avatar
                  width={44}
                  height={44}
                  source={require("../Assets/Images/arrows_click.jpg")}
                  avatarStyle={{height:44, width: 44}}
                  onPress={() => togglePickDrop('_reverse')}
                  
                  activeOpacity={1}
              />
              } 
            {(avtarSource == '_reverse') &&
              <Avatar
                  width={44}
                  height={44}
                  source={require("../Assets/Images/arrows_reverse.jpg")}
                  avatarStyle={{height:44, width: 44}}
                  onPress={() => togglePickDrop('_click')}
                  activeOpacity={1}
              />
            }
          </View>
        </View>
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#111'}}>
              <View style={{flexDirection:'column', width: 70}}>
                <Text style={styles.ModalDropDownLabel}>Pickup:</Text>
              </View>
              <View style={{flexDirection:'column', width: WINDOW_WIDTH - 170}}>
                  <View>
                      <ModalDropdown ref={el => this._dropdown_Pickup = el}  
                        dropdownTextStyle={styles.ModalDropDownTextOption} 
                        textStyle={styles.ModalDropDownText} 
                        options={hh} 
                        defaultIndex={defaultPicIndex}
                        defaultValue={defaultPicValue}
                        onSelect={bindPicDrop.bind(this, "pickUp")}
                        >
                      </ModalDropdown>  
                  </View>
              </View>
              <View style={{flexDirection:'column', alignItems: 'center'}}>
                        {(avtarSource == '_click')&&
                        <Icon
                              name='location'
                              type='evilicon'
                              color='#f00'
                              underlayColor='#f00'
                      />  
                        }
                        {(avtarSource == '_reverse') &&
                          <Icon
                            name='location'
                            type='evilicon'
                            color='#00f'
                            underlayColor='#00f'
                        /> 
                        }
              </View>
          </View>
          <View style={{flexDirection:'row', paddingTop: 5}}>
              <View style={{flexDirection:'column', width: 70}}>
                <Text style={styles.ModalDropDownLabel}>Drop-Off:</Text>
              </View>
              <View style={{flexDirection:'column', width: WINDOW_WIDTH - 170}}>
                  <View>
                      <ModalDropdown ref={eld => this._dropdown_Drop = eld}
                      textStyle={styles.ModalDropDownText} 
                      dropdownTextStyle={styles.ModalDropDownTextOption}  
                      options={hh} 
                      defaultIndex={defaultDropIndex}
                      defaultValue={defaultDropValue}
                      onSelect={bindPicDrop.bind(this, "dropOff")}             
                      />
                  </View>
                </View>
                <View style={{flexDirection:'column', alignItems: 'center'}}>
                        {(avtarSource == '_click') &&
                        <Icon
                          name='location'
                          type='evilicon'
                          color='blue'
                          underlayColor='blue'
                      /> 
                      }
                      {(avtarSource == '_reverse')&&
                      <Icon
                            name='location'
                            type='evilicon'
                            color='green'
                            underlayColor='green'
                    />  
                      }
                  </View>
              </View>

  </View>
        </View>
      );
  }

const WINDOW_WIDTH=Dimensions.get("window").width - 20;
const styles = StyleSheet.create({
  PicDrop: {
    top: -200,
    width: WINDOW_WIDTH,
    backgroundColor:'#5bc0de', 
    height: 90,
  }, 
  firstInput:{
      marginLeft:15,
      marginRight:10,
      marginTop:5,
      marginBottom:0,
      height:30,
      backgroundColor:"#fff",
      opacity:0.9,
      borderRadius:0
  },
    secondInput:{
      marginLeft:15,
      marginRight:10,
      marginTop:15,
      height:30,
      marginBottom:0,
      backgroundColor:"#fff",
      opacity:0.9,
      borderRadius:0
  },
  ModalDroDownContainer: {
    flexDirection:'row',
    height: 60,
    width: WINDOW_WIDTH - 8,
    backgroundColor:'#fff',
    justifyContent: 'center', 
    paddingLeft: 0,
    paddingTop: 10,
    borderBottomWidth:0.5, 
    borderBottomColor:'#eee',
    opacity: 0.9,
    borderRadius:0.5
  },
  ModalDropDownText: {
    fontSize:15, 
    fontWeight: 'normal', 
    color: '#333',
  },
  ModalDropDownTextOption: {
    marginBottom:0,
    marginLeft: 0,
    fontSize:15, 
    fontWeight: 'normal', 
    color: '#666',
  },
  ModalDropDownLabel: {
    fontSize:12, 
    fontWeight: 'bold', 
    color: '#333',
  },

});
export default PicDropLoc;