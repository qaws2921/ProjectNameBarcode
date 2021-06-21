import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,Dimensions ,ScrollView } from "react-native";

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }


  

 

  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainTitle}>
        <Image
          source={require("../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
          <Text>테스트</Text>
        </View>
        <View style={styles.start}>
          <View style={styles.v1}>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.props.navigation.navigate('DrawerNavigationRoutes', { screen: 'settingScreenStack' })}}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_2}>
                <TouchableOpacity style={styles.touch}>
                <Image
                source={require("../assets/images/icon.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
                <Text style={styles.home}>test</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_2}>
              <TouchableOpacity style={styles.touch}>
              <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
              <Text style={styles.home}>test</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.v2}>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_1}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v1_1_3}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_2}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.v1_1_4,styles.v_backgroundColor]}>
              
            </View>
        </View>
          </View>
        </View>


        <View style={styles.mainTitle}>
        <Image
          source={require("../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
          <Text>테스트</Text>
        </View>
        <View style={styles.start}>
          <View style={styles.v1}>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.props.navigation.navigate('SettingsScreen')}}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_2}>
                <TouchableOpacity style={styles.touch}>
                <Image
                source={require("../assets/images/icon.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
                <Text style={styles.home}>test</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_2}>
              <TouchableOpacity style={styles.touch}>
              <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
              <Text style={styles.home}>test</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.v2}>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_1}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v1_1_3}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_2}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.v1_1_4,styles.v_backgroundColor]}>
              
            </View>
        </View>
          </View>
        </View>

        <View style={styles.mainTitle}>
        <Image
          source={require("../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
          <Text>테스트</Text>
        </View>
        <View style={styles.start}>
          <View style={styles.v1}>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.props.navigation.navigate('SettingsScreen')}}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_2}>
                <TouchableOpacity style={styles.touch}>
                <Image
                source={require("../assets/images/icon.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
                <Text style={styles.home}>test</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_2}>
              <TouchableOpacity style={styles.touch}>
              <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
              <Text style={styles.home}>test</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.v2}>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_1}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v1_1_3}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_2}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.v1_1_4,styles.v_backgroundColor]}>
              
            </View>
        </View>
          </View>
        </View>

        <View style={styles.mainTitle}>
        <Image
          source={require("../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
          <Text>테스트</Text>
        </View>
        <View style={styles.start}>
          <View style={styles.v1}>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.props.navigation.navigate('SettingsScreen')}}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_2}>
                <TouchableOpacity style={styles.touch}>
                <Image
                source={require("../assets/images/icon.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
                <Text style={styles.home}>test</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_2}>
              <TouchableOpacity style={styles.touch}>
              <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
              <Text style={styles.home}>test</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.v2}>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_1}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v1_1_3}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_2}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.v1_1_4,styles.v_backgroundColor]}>
              
            </View>
        </View>
          </View>
        </View>

        <View style={styles.mainTitle}>
        <Image
          source={require("../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
          <Text>테스트</Text>
        </View>
        <View style={styles.start}>
          <View style={styles.v1}>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_1}>
                <TouchableOpacity style={styles.touch} onPress={() => {this.props.navigation.navigate('SettingsScreen')}}>
                  <Image
                  source={require("../assets/images/icon.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.home}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.v1_1}>
              <View style={styles.v1_1_2}>
                <TouchableOpacity style={styles.touch}>
                <Image
                source={require("../assets/images/icon.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
                <Text style={styles.home}>test</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.v1_1_2}>
              <TouchableOpacity style={styles.touch}>
              <Image
              source={require("../assets/images/icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
              <Text style={styles.home}>test</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.v2}>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_1}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v1_1_3}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.v1_1}>
            <View style={styles.v1_1_2}>
            <TouchableOpacity style={styles.touch}>
            <Image
            source={require("../assets/images/icon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
            <Text style={styles.home}>test</Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.v1_1_4,styles.v_backgroundColor]}>
              
            </View>
        </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
  start:{
   
    flexDirection: "row",
    height:180
  },
  mainTitle: {
    flexDirection: "row",
    marginTop: 20
  }
  ,
  v1:{
    flex:0.5,
    
  },
  v2:{
    flex:0.5,
   
  },
  v1_1: {
    flexDirection: "row",
    flex:0.5,
   
  },
  v1_1_1: {
    flex:0.5,
    borderColor:'black',
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    backgroundColor:'#84bee0'
  },
  v1_1_2: {
    flex:0.5,
    borderColor:'black',
    borderLeftWidth:1,
    borderBottomWidth:1,
    backgroundColor:'#84bee0'
  },
  v1_1_3: {
    flex:0.5,
    borderColor:'black',
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderRightWidth:1,
    backgroundColor:'#84bee0'
  },
  v1_1_4: {
    flex:0.5,
    borderColor:'black',
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth:1,
    backgroundColor:'#84bee0'
  },
  v_backgroundColor: {
    backgroundColor:'white'
  },
  touch:{
    flex:1,
    
  },
  image: {
    width: 85,
    height: 52,
    marginTop: -1,
    alignSelf: "center"
  },
  home: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    alignSelf: "center"
  },
  image2: {
    width: 20,
    height: 20,
    marginTop: -1,
    alignSelf: "center"
  },
});

export default HomeScreen;