import React from "react"
import {View,Text, StyleSheet} from "react-native"

export default function Header(){
  return(
    <View style={pretty.headerContainer}>
      <Text style={pretty.header}>ToDo-ist</Text>
    </View>
  )
}

const pretty = StyleSheet.create({
  headerContainer:{
    padding: 15,
    alignItems: 'center',
    justiftContent: 'center',
    backgroundColor: '#038aff',
    borderRadius: 5,
  },
  header:{
    color: '#333',
    fontWeight: 400,
  }
})


// export default Header