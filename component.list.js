import React from "react"
import { TouchableOpacity, Text, StyleSheet} from "react-native"

function List(props){
  return(
    <TouchableOpacity onPress={() => props.clearFunc(props.keyPass)}>
      <Text style={pretty.listItem}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const pretty = StyleSheet.create({
  listItem:{
    marginTop: 20,
    margin: 5,
    padding: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 5,
  }
})
export default List