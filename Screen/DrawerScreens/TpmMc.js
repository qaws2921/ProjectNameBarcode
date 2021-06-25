import React,{useEffect,useState,useCallback} from 'react'
import {Alert,Modal,View,Image, Text,Pressable,ActivityIndicator,TouchableOpacity, SafeAreaView,Button,ScrollView,StyleSheet,FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { set } from 'react-native-reanimated';
import { FlatGrid } from 'react-native-super-grid';
import Loader from '../Components/Loader';
import SModal from './TpmMc_modal';
import { useDispatch } from "react-redux";
import { api_select1 } from "../_actions/api_select";
import { useStateCallback } from "use-state-callback";




export default function TpmMc() {
  const [todos,setTodos] = useState([]);
  const [value, setValue] = useState("")
  const [page, setPage] = useStateCallback(0)
  const [rows, setRows] = useState(10)
  const [mcList, setMcList] = useState([])
  const [loading, setLoading] = useStateCallback(false)
  const [refreshing, setRefreshing] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const scrollViewRef = React.createRef();
  const dispatch = useDispatch();


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
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 ,// to ensure the text is never behind the icon
       
        placeholderColor: '#ababa',
        backgroundColor: "#asdsad",
      },
      
};

  useEffect(() => {
    line_select()
  },[])

  const getItems = useCallback(async () => {

    if(loading) {
      
      console.log(loading)
      const formData = new FormData;
      formData.append('keyword', value);
      formData.append('page', page)
      formData.append('rows', rows);
  
      await  dispatch(api_select1('http://192.168.1.31:19823/tpmMCGet',formData))
      .then(response => {
        console.log(page)
        let v_mcList = [];
        if(page !== 1) v_mcList = [...mcList,...response.payload.rows] 
        else v_mcList = [...response.payload.rows]
        setMcList(v_mcList);
        if(page !== 1 && response.payload.rows.length == 0) setPage(page-1)

        // let count = response.payload.rows.length
        // if(index == 1 && count > 0) setPage(index + 1)
        // else if(count > 0) setParge(page + 1)
        
      })
      setLoading(false)
      setRefreshing(false)
    }
    

  }, [loading])


  useEffect(() => {
    getItems()
  }, [getItems])

  const line_select = () => {
    var fdata = new FormData();
    fdata.append('keyword',"L9000");
    
    dispatch(api_select1('http://192.168.1.31:19823/syslineAllGroupGet',fdata))
    .then(response => {
      let todoList = []
      response.payload.map((data,index) => {
        todoList.push(
          {label:data.line_name,
            value:data.line_code,
            key:index
          })
      })
      
      setTodos(todoList);
     
    })
  }


  const _tpmMcMainGet = (index) => {
    console.log("스크롤"+refreshing)
    console.log("로딩"+loading)
    if(index == 1 && mcList.length > 0)  {
      scrollViewRef.current.scrollToIndex({index: 0});
      setMcList([]);
      setLoading(true);
    }
    if(!loading && index == 1) {
      setPage(index)
      setLoading(true);
    } else {
      if(refreshing){  
        setLoading(true);
        if(!loading && index !== 1) {
          setPage(page + 1);
        } 
      }
    }
    
  }

  const renderFooter = () => {
   
    if (!loading) {
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
  const imageUrl1 = (url) => {
    return 'http://192.168.1.31:19823/uploadFile/tpmMC/'+url
  }


  const onPressFunction = () => {
    console.log("ㅅㅅㅅ")
    if(mcList.length > 0) {
      scrollViewRef.current.scrollToIndex({index: 0});
      
    }
  };

  const displayModal = (show) => {
    setIsVisible(show)
  }

  

  return (
    <View style={{flex: 1}}>
    
    <TouchableOpacity style={styles.button2} onPress={onPressFunction}>
      <Text style={styles.arrow}>^</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={() => displayModal(true)}>
      <Text style={styles.arrow}>+</Text>
    </TouchableOpacity>
    <View style={styles.picker}>  
    <RNPickerSelect

      onValueChange={(value) => { setValue(value)}}
      items={todos}
      style={ pickerStyle }
      placeholder={{  // 값이 없을때 보일 값, 없어도 된다면 이 안의 내용을 지운다. placeholder={{}} 이건 남겨둠.. 이부분까지 지우면 기본값으로 설정됨.
        label: '전체',
        value: '',
        key:'abc'
      }}
  
    />
    </View>

    <Button  title="조회" onPress={(() =>_tpmMcMainGet(1))} />
 
    <FlatList
    ref={scrollViewRef}
    disableVirtualization={false}
    maxToRenderPerBatch={10}
      itemDimension={130}
      data={mcList}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
          <Image style={styles.itemImage} source = {{ uri: imageUrl1(item.image1)}} /> 
          <Text style={styles.itemName}>{item.machine_code}</Text>
          <Text style={styles.itemCode}>{item.machine_name}</Text>
          <Text style={styles.itemCode}>{item.line_name}</Text>
          <Text style={styles.itemCode}>{item.user_name}</Text>
          <Text style={styles.itemCode}>{item.update_date}</Text>
        </View>
      )}
      keyExtractor={(item, index) => item.machine_code}
      ListFooterComponent={renderFooter}
      onEndReached={_tpmMcMainGet}
      onEndReachedThreshold={0.01}
      refreshing={true}
      onMomentumScrollBegin={() => {setRefreshing(true)}}
      bounces={false}
    />


    <SModal isVisible = {isVisible} displayModal={displayModal} pickerStyle={pickerStyle}/>    

    </View>
  )
}


const styles = StyleSheet.create({
  gridView: {
    // marginTop: 10,
    margin: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    height: 150,
    // backgroundColor: '#1453a1',
    borderColor:'#1453a1',
    borderWidth:5,
    width:'100%'
  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
  },
  button2: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#1453a1',
    borderColor:'#000',
    borderWidth:1,
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
    fontSize: 35,
    
  },
  itemImage :{
    width: 50,
    height: 50
  },
  picker:{
    backgroundColor:"white"

  }

});