// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{Component, useState,useRef} from 'react';
import {Alert,Modal,View,Image, Text,Pressable,ActivityIndicator,TouchableOpacity, SafeAreaView,Button,ScrollView,StyleSheet,FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { set } from 'react-native-reanimated';
import { FlatGrid } from 'react-native-super-grid';
import Loader from '../Components/Loader';
import SModal from './SettngsScreenModal';

class SettingsScreen extends Component {
  
  constructor(props){
    super(props)
    this.state={
      todos:[],
      loading:false,
      mcList:[],
      index:1,
      value:'',
      isVisible: false
    }
    // this._dataStart();
    // this._dataStart();
    this.scrollViewRef = React.createRef();
  }

  

  
  componentDidMount(){
    this._dataStart = this._dataStart.bind(this);
    this._dataStart()
  }
  _dataMcStart() {
   
    this.setState({
      loading:true
    },function(){
      console.log(this.state.index+"제대로 되나 페이징")
      const _this =this;
      let mcList = [...this.state.mcList]
      const formData = new FormData;
      formData.append('keyword', this.state.value);
      formData.append('page', this.state.index);
      formData.append('rows', 50);
      fetch('http://192.168.1.31:19823/tpmMCGet', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
         
          console.log(this.state.index+"제대로 되나 페이징>")
          responseJson.rows.map((data) => {
            mcList.push(
              {machine_code:data.machine_code,
                machine_name:data.machine_name
              })
            
         
        })
  
        // let conlist = [...this.state.todos,todoList]
        this.setState({
          mcList : mcList
        })
        // console.log( this.state.todos)
        this.setState({
          loading:false
        })
        console.log(responseJson.rows.length)
        if(responseJson.rows.length == 0) {
          this.setState({
            index:this.state.index - 1
          })
        }
       
      }).catch((error) => {
          //Hide Loader
          console.error(error);
          _this.setState({
            loading:false
          })
      });

    })
   
  
  }

  _dataMcOneStart() {
    if (this.state.loading) {
      return;
    }
    else{
      
    this.setState({
      loading:true,
      index:1,
      mcList:[]
    },function(){
      console.log(this.state.index+"제대로 되나 조회")
    const _this =this;
    let mcList = []
    const formData = new FormData;
    formData.append('keyword', this.state.value);
    formData.append('page', this.state.index);
    formData.append('rows', 50);
    fetch('http://192.168.1.31:19823/tpmMCGet', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       

        responseJson.rows.map((data) => {
          mcList.push(
            {machine_code:data.machine_code,
              machine_name:data.machine_name
            })
          
       
      })

      // let conlist = [...this.state.todos,todoList]
      this.setState({
        mcList : mcList
      })
      // console.log( this.state.todos)
      this.setState({
        loading:false
      })

  
    }).catch((error) => {
        //Hide Loader
        console.error(error);
        _this.setState({
          loading:false
        })
    });
    })
    
  }
  }
  

  _dataStart(){
    this.setState({
      loading:true
    })

    const _this =this;
    let todoList = [...this.state.todos]
    const formData = new FormData;
    formData.append('keyword', 'L9000');
    fetch('http://192.168.1.31:19823/syslineAllGroupGet', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       

        responseJson.map((data) => {
          todoList.push(
            {label:data.line_name,
              value:data.line_code
            })
          
       
      })

      // let conlist = [...this.state.todos,todoList]
      this.setState({
        todos : todoList
      })
      // console.log( this.state.todos)
      this.setState({
        loading:false
      })
  
    }).catch((error) => {
        //Hide Loader
        console.error(error);
        _this.setState({
          loading:false
        })
    });
  }




  _testt(){
    
    if (this.state.loading) {
      return;
    } else {
      this.setState({
        index:this.state.index +1
      },function(){
       
        this._dataMcStart();
      })
     
     
  
    }  
  }


  onPressFunction() {
    if(this.state.mcList.length > 0) {
      this.scrollViewRef.current.scrollToIndex({index: 0});
      
    }
  };

  
  renderFooter () {
   
    if (!this.state.loading) {
      return null;
    } else{
      return (
        <View
          style={{
            paddingVertical: 20,
           
          }}
        >
          <ActivityIndicator animating size="large" color="#0000ff"/>
        </View>
      );
    }

    
  };
  displayModal(show){
    this.setState({isVisible: show})
  }
  render() {   
    const pickerStyle = {
      inputIOS: {
          color: 'black',
         
      },
      placeholder: {
          color: 'black',
        },
      inputAndroid: {
          color: 'black',
        
      },
  };
    
    return (
      <View style={{flex: 1}}>
      <TouchableOpacity style={styles.button2} onPress={this.onPressFunction.bind(this)}>
        <Text style={styles.arrow}>^</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() =>this.displayModal(true)}>
        <Text style={styles.arrow}>+</Text>
      </TouchableOpacity>
      <RNPickerSelect
          
              onValueChange={(value) => { this.setState({value:value})}}
              items={this.state.todos}
              style={ pickerStyle }
              placeholder={{  // 값이 없을때 보일 값, 없어도 된다면 이 안의 내용을 지운다. placeholder={{}} 이건 남겨둠.. 이부분까지 지우면 기본값으로 설정됨.
                label: '전체',
                 value: '',
               }}
               placeholderTextColor="red"
          />
          <Button  title="조회" onPress={this._dataMcOneStart.bind(this)}>
          
          </Button>

                

          <FlatGrid
          ref={this.scrollViewRef}
          disableVirtualization={false}
            itemDimension={130}
            data={this.state.mcList}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
              <View style={[styles.itemContainer, { backgroundColor: '#1453a1' }]}>
                <Text style={styles.itemName}>{item.machine_code}</Text>
                <Text style={styles.itemCode}>{item.machine_name}</Text>
              </View>
            )}
            
            ListFooterComponent={this.renderFooter.bind(this)}
            onMomentumScrollEnd={this._testt.bind(this)}
            onEndReachedThreshold={0.5}
          />
         
        
        <SModal isVisible = {this.state.isVisible} displayModal={this.displayModal.bind(this)}/>
      </View>
    );
  }    
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: 'black'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  button2: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    zIndex:100
  },
  button3: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 90,
    zIndex:100
  },
  arrow: {
    fontSize: 48,
  },

});

export default SettingsScreen;