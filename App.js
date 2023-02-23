import {React, useState} from "react"
import {View, StyleSheet, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from "react-native"

// Custom components
import Header from "./component.header"
import List from "./component.list"
import AddToDo from "./component.addToDo"

export default function App(){
  const [todoList, setTodoList] = useState([
    {key: 1, text: "Wax windows"},
  ])

  function clearItem(key){
    // Function to clear item when clicked on.
    //Pass the function as a prop to the <List /> custom component
    setTodoList((prevTodoList)=>{
      return prevTodoList.filter((todoList)=>todoList.key != key)
    })
  }

  function submitTrackedText(trackedText){
    if(trackedText.length > 3){
      setTodoList((prevTodoList)=>{
        return [
          {text: trackedText, key: Math.random()},
          ...prevTodoList
        ]
      })
    } else{
      Alert.alert('Ooohhh No!','To-dos must be over 3 characters long',[
        {text: 'Got it'}
      ])
    }
  } 

  return(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={pretty.container}>
          {/* Header */}
          <Header />
          <View style={pretty.body}>
            {/* Form */}
            <AddToDo 
              submit={submitTrackedText}
            />
            {/* List */}
            <FlatList
              data={todoList}
              renderItem={({item})=>(
                <List 
                keyPass={item.key}
                text={item.text}
                clearFunc={clearItem}
                />
              )}
            />
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const pretty = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#999',
    height: '100%',
    width: '100%',
    padding: 20,
  },
  body:{
    marginTop: 20,
  }
}) 

// export default App