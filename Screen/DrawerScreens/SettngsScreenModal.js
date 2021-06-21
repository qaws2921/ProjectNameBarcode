// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{Component, useState,useRef} from 'react';
import {Alert,Modal,View,Image, Text,Pressable,ActivityIndicator,TouchableOpacity, SafeAreaView,Button,ScrollView,StyleSheet,FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Loader from '../Components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class SettingsScreenModal extends Component {
  constructor(props){
    super(props)
   
  }
 
  _closeBtn(){
    this.props.displayModal(!(this.props.isVisible))
  }


  render() {   

    return (
        <Modal
      
            animationType = {"slide"}
            transparent={true}
            visible={this.props.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>
            <View style={styles.container} >
              <View style={styles.blankSpace}>
              
              <View style={styles.blankButton}>
                <TouchableOpacity style={styles.blankButtonD} onPress={this._closeBtn.bind(this)}><Text style={styles.blankButtonF}>취소</Text></TouchableOpacity>
                <TouchableOpacity style={styles.blankButtonD}><Text style={styles.blankButtonF}>저장</Text></TouchableOpacity>
              </View>
              
            
              <ScrollView style={styles.blankSpace2} >
                  <Image 
                  source={require('./../assets/images/icon.png')}
                  style = { styles.image }/>
                  <Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>

<Input
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>


 <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={styles}
   onChangeText={value => this.setState({ comment: value })}
  />


<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>

<Input placeholder="Password" secureTextEntry={true} />
                
               
              </ScrollView>
              </View>
            </View>
          </Modal>
    );
  }    
};

const styles = StyleSheet.create({
  container: {

    flex: 1,

    justifyContent: 'flex-end',

    alignItems: 'center',
    backgroundColor:"#00000040"

  },
  blankButton: {

    

    width: '100%',

    height: '5%',
    justifyContent: 'space-between',

    backgroundColor: '#ffffff',
    flexDirection:"row"
   

  },
  blankButtonD: {
    
    height:50,
    padding: 5,  
  },
  blankButtonF: {
    
   fontSize:20,
   fontWeight:"500",
   color: "#1453a1",
   padding: 5,  
  },

  blankSpace: {

   
    width: '100%',

    height: '90%',

    backgroundColor: '#ffffff',

   

  },

  blankSpace2: {

   flex: 1,
    width: '100%',

   

    backgroundColor: '#ffffff',

   

  },

  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});

export default SettingsScreenModal;