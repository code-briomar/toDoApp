import React,{ useState } from "react"
import {View, TextInput, StyleSheet, Button} from "react-native"

function AddToDo(props){
  const [inputText, setInputText] = useState('')
  function changeTracker(paramInputValue){
    //Set Input Text as the state inputText
    setInputText(paramInputValue)
  }
  return(
    <View>
      <TextInput 
      placeholder="e.g Replace Phone's screen protector"
      // value={}
      style={pretty.textInput}
      onChangeText=
      {
        function(inputValue){
          return changeTracker(inputValue)
        }
      }
      />
      <Button
      color='#038aff'
      title='+ Add'
      onPress={()=> props.submit(inputText)}
      />
    </View>
  )
}

const pretty = StyleSheet.create({
  textInput:{
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 10, 
  }
})

export default AddToDo