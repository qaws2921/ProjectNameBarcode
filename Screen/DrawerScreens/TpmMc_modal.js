import React,{Component, useState,useRef} from 'react';
import {TextInput ,Alert,Modal,View,Image, Text,TouchableOpacity, ScrollView,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Loader from '../Components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function TpmMc_modal(props) {
  const [amount, setAmount] = useState("")
  const [yn, setYn] = useState("Y")

  const pickerStyle = {

    placeholder: {
        color: 'black',
      },
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 ,// to ensure the text is never behind the icon
       
        placeholderColor: '#ababa',
        backgroundColor: "#asdsad",
      },
      
};

  const _closeBtn = () => {
    props.displayModal(!(props.isVisible))
  }

  const onChanged= (text) =>{
    
      setAmount( text.replace(/[^0-9]/g, '') ) 
    
}

  return (
    <Modal
    backdropOpacity={1}
        animationType = {"slide"}
        transparent={true}
        visible={props.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has now been closed.');
        }}>
        <View style={styles.container} >
          <View style={styles.blankSpace}>
          
          <View style={styles.blankButton}>
            <TouchableOpacity style={styles.blankButtonD} onPress={() =>_closeBtn()}><Text style={styles.blankButtonF}>닫기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.blankButtonD}><Text style={styles.blankButtonF}>저장</Text></TouchableOpacity>
          </View>
          
        
          <ScrollView style={styles.blankSpace2} >
              <Image 
              source={require('./../assets/images/icon.png')}
              style = { styles.image }/>

              <View style = {styles.container2}>
                <Text style={styles.emailAdd}>
                  설비코드
                </Text>
                <TextInput 
                     
                    
                      
                      keyboardType='email-address'
                      style={styles.emailInput}
                      placeholder={'text'}
                      underlineColorAndroid='transparent'/>

              </View>

              <View style = {styles.container2}>
                <Text style={styles.emailAdd}>
                  설비명
                </Text>
                <TextInput 
                     
                      
                      
                      keyboardType='email-address'
                      style={styles.emailInput}
                      placeholder={'text'}
                      underlineColorAndroid='transparent'/>

              </View>

              <View style = {styles.container2}>
                <Text style={styles.emailAdd}>
                  설치장소
                </Text>
                <TextInput 
                     
                      type='email'
                      
                      keyboardType='email-address'
                      style={styles.emailInput}
                      placeholder={'select'}
                      
                      underlineColorAndroid='transparent'/>

              </View>
              <View style = {styles.container2}>
                <Text style={styles.emailAdd}>
                  설치일자
                </Text>
                <TextInput 
                     
                     
                      
                      keyboardType='email-address'
                      style={styles.emailInput}
                      placeholder={'date'}
                      underlineColorAndroid='transparent'/>

              </View>
              <View style = {styles.container2}>
                <Text style={styles.emailAdd}>
                  제작금액
                </Text>
                <TextInput 
                     
                      
                      keyboardType='numeric'
                      onChangeText={(text)=> onChanged(text)}
                      style={styles.emailInput}
                      value = {amount}
                      underlineColorAndroid='transparent'/>

              </View>
              <View style = {styles.container2}>
              <Text style={styles.emailAdd}>
                중첩관리
              </Text>
              <RNPickerSelect
              style={pickerStyle}
                items={[{label:"무",value:"N",key:2}]}
                placeholder={{label:"유",value:"Y",key:1}}
                onValueChange={(value) => { setYn(value)}}
                />
   

            </View>
        

            
            
           
          </ScrollView> 
          </View>
        </View>
      </Modal>
  );

}

const styles = StyleSheet.create({
  container: {

    flex: 1,

    justifyContent: 'flex-end',

    alignItems: 'center',
    backgroundColor:"#00000040"

  },
  container2 : {
    // height: 90
    margin: 10
  },
  emailInput: {
    borderColor:'#1453a1',
    borderWidth:1,
    borderRadius:10
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

    height: '100%',

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