import React,{useState,useEffect} from 'react'
import { View, Text,Pressable,ActivityIndicator, SafeAreaView,Button,ScrollView,StyleSheet,FlatList} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { FlatGrid } from 'react-native-super-grid';

function  SettingsScreen() {
  const [todos, setTodos] = useState([]);
  const [mcList, setMcList] = useState([]);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState("aa");
  const _dataStart = () => {
    setLoading(true)

    const _this =this;
    let todoList = [...todos]
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
      setTodos(todoList)
      // console.log( this.state.todos)
      setLoading(false)
  
    }).catch((error) => {
        //Hide Loader
        console.error(error);
        setLoading(false)
    });
  }

  const _dataMcStart = () => {
  
      setLoading(true);
     
    console.log(index+"제대로 되나 페이지")
    const _this =this;
    let mcList2 = [...mcList]
    const formData = new FormData;
    formData.append('keyword', value);
    formData.append('page', index);
    formData.append('rows', 10);
    fetch('http://192.168.1.31:19823/tpmMCGet', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       

        responseJson.rows.map((data) => {
          mcList2.push(
            {machine_code:data.machine_code,
              machine_name:data.machine_name
            })
          
       
      })

      // let conlist = [...this.state.todos,todoList]
      setMcList(mcList2)
      // console.log( this.state.todos)
      setLoading(false);
  
    }).catch((error) => {
        //Hide Loader
        console.error(error);
        setLoading(false);
  
    });
  }
  const  _dataMcOneStart = () => {
    if (loading) {
      return;
    }
    else{
      
      setIndex(1);
      setLoading(true);
      setMcList([]);
   
      console.log(index+"제대로 되나 조회")
    const _this =this;
    let mcList2 = []
    const formData = new FormData;
    formData.append('keyword', value);
    formData.append('page', index);
    formData.append('rows', 10);
    fetch('http://192.168.1.31:19823/tpmMCGet', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       

        responseJson.rows.map((data) => {
          mcList2.push(
            {machine_code:data.machine_code,
              machine_name:data.machine_name
            })
          
       
      })

      // let conlist = [...this.state.todos,todoList]
      setMcList(mcList2)
      // console.log( this.state.todos)
      setLoading(false);
  
    }).catch((error) => {
        //Hide Loader
        console.error(error);
        setLoading(false);
  
    });
    
    
  }
  }

  const _testt = () => {
    
    if (loading) {
      return;
    } else {
      setIndex(index +1)
      _dataMcStart();
  
    }  
  }

  const renderFooter = () => {
   
    if (loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
         
        }}
      >
        <ActivityIndicator animating size="large" color="#0000ff"/>
      </View>
    );
  };

  useEffect(() => {
    _dataStart();
    setMcList([]);
    setLoading(false);
    console.log("sss");
  }, []);

  
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
  }
 return(
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
      <Button  title="조회" onPress={_dataMcOneStart} />
      <FlatGrid
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
        ListFooterComponent={renderFooter}
        onEndReached ={_testt}
        onEndReachedThreshold={0}
      />
   </View>
 ) 
}

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
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  arrow: {
    fontSize: 48,
  },
});
export default SettingsScreen;