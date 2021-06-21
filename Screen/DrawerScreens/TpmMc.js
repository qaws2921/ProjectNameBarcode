import React,{useEffect,useState,useCallback} from 'react'
import {Alert,Modal,View,Image, Text,Pressable,ActivityIndicator,TouchableOpacity, SafeAreaView,Button,ScrollView,StyleSheet,FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { set } from 'react-native-reanimated';
import { FlatGrid } from 'react-native-super-grid';
import Loader from '../Components/Loader';
import SModal from './SettngsScreenModal';
import { useDispatch } from "react-redux";
import { api_select1 } from "../_actions/api_select";
import { useStateCallback } from "use-state-callback";




export default function TpmMc() {
  const [todos,setTodos] = useState("");
  const [value, setValue] = useState("")
  const [page, setPage] = useStateCallback(0)
  const [rows, setRows] = useState(10)
  const [mcList, setMcList] = useState([])
  const [loading, setLoading] = useStateCallback(false)
  const scrollViewRef = React.createRef();
  const dispatch = useDispatch();


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
    
    if(index == 1 && mcList.length > 0)  {
      scrollViewRef.current.scrollToIndex({index: 0});
      setMcList([]);
    }
    setLoading(true);
    if(!loading && index !== 1) {
      setPage(page + 1);
    } else if(!loading && index == 1) {
      setPage(index)
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


  return (
    <View style={{flex: 1}}>
      <RNPickerSelect
            
      onValueChange={(value) => { setValue(value)}}
      items={todos}
      style={ pickerStyle }
      placeholder={{  // 값이 없을때 보일 값, 없어도 된다면 이 안의 내용을 지운다. placeholder={{}} 이건 남겨둠.. 이부분까지 지우면 기본값으로 설정됨.
        label: '전체',
        value: '',
      }}
      placeholderTextColor="red"
    />

    <Button  title="조회" onPress={(() =>_tpmMcMainGet(1))} />
 
    <FlatList
    ref={scrollViewRef}
    disableVirtualization={false}
      itemDimension={130}
      data={mcList}
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
      keyExtractor={(item, index) => item.machine_code}
      ListFooterComponent={renderFooter}
      onMomentumScrollEnd={_tpmMcMainGet}
      onEndReachedThreshold={0.1}
      
    />


{/* 
  ListFooterComponent={this.renderFooter.bind(this)}
      onMomentumScrollEnd={this._testt.bind(this)}
      onEndReachedThreshold={0.5}
*/}

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
    justifyContent: 'flex-end',
    borderRadius: 5,
    marginTop: 5,
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