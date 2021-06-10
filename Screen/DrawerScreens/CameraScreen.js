// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {  
  Text,
  View,
  Item,
  Icon,
  Input,
  TextInput,
  Button, SafeAreaView} from 'react-native';
  import { KeyboardAvoidingView } from "react-native";
  import { RNCamera } from 'react-native-camera';
  import BarcodeMask from 'react-native-barcode-mask';
 

  const styles = {
    container: {
      flex: 1
    },
    container2: {
      flex: 1
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    overlay: {
      position: 'absolute',
      padding: 16,
      right: 0,
      left: 0,
      alignItems: 'center'
    },
    topOverlay: {
      top: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    bottomOverlay: {
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    enterBarcodeManualButton: {
      padding: 15,
      backgroundColor: 'white',
      borderRadius: 40
    },
    scanScreenMessage: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    root: {
      flex: 1,
      
  },
  upperSection: {
      flex: 1,
    
  },
  lowerSection: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: 'white',
  },
  camera: {
      height: '100%',
  },

  };



class CameraScreen extends React.Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];
    this.setState({
      barcode: ''
    });
    this.state = {
      barcode:"",
      camera: {
        type: RNCamera.Constants.Type.back,
	flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  
  
  
  onGetItemPress = () => {
    // do something with button press
  }
  
  handleChange = () => {
    // handle user input
  }
  onBarCodeRead(scanResult) {
    // console.warn(scanResult.type);
    // console.warn(scanResult.data);
    if (scanResult.data != null) {
	if (!this.barcodeCodes.includes(scanResult.data)) {
	  this.barcodeCodes.push(scanResult.data);
	  // console.warn('onBarCodeRead call');
    this.setState({
      barcode: scanResult.data
    });
   
	}
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  getInitialState() {
    return {
      barcode: "",
    };
  }

  render() {
     return (

      <View style={{flex: 1, padding: 16 }}>
        
          <View style={styles.upperSection}>
            <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            style={styles.preview}
            type={this.state.camera.type}    
            >
                <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={false}/>

            </RNCamera>
          </View>

          <View style={styles.lowerSection}>

           <TextInput
                    placeholder='Barcode of the item'
                    value={this.state.barcode}
                    onChangeText={() => this.handleChange()} />    
           
            <Button
            onPress={() => { console.log('scan clicked'); }}
            style={styles.enterBarcodeManualButton}
            title="Enter Barcode">
            </Button>
          </View>
        
        </View>
       
       
     )
  }
  
}

export default CameraScreen;