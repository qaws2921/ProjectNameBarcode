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
    root: {
        flex: 1,
        
    },
    upperSection: {
        flex: 1,
        alignItems: 'center',
            justifyContent: 'center',
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

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  
  onBarCodeRead = (scanResult) => {
    // scanResult.data will contain your scanned data
  }
  
  onGetItemPress = () => {
    // do something with button press
  }
  
  handleChange = () => {
    // handle user input
  }
  onBarCodeRead(scanResult) {
    console.warn(scanResult.type);
    console.warn(scanResult.data);
    if (scanResult.data != null) {
	if (!this.barcodeCodes.includes(scanResult.data)) {
	  this.barcodeCodes.push(scanResult.data);
	  console.warn('onBarCodeRead call');
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
  render() {
     return (
      <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16 }}>
        <KeyboardAvoidingView style={styles.root}>  
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
                primary
                onPress={() => this.onGetItemPress()} 
                title="Get Item">
            </Button>
          </View>
        </KeyboardAvoidingView>
        </View>
        </SafeAreaView>
       
     )
  }
  
}

export default CameraScreen;