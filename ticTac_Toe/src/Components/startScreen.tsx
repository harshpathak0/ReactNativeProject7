import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function StartScreen(props) {
  return (
    <View >
      <View > 
        <Pressable
          onPress={() => props.navigation.navigate("Start Playing")}
          style={styles.pressBtn}
        >
          <Text style={styles.btn}>Start Game</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pressBtn:{
    flex:1,
    alignItems: 'center',
    marginVertical: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    elevation: 5
  },
  btn: {
    width: 100,
    height: 40,
    borderRadius:10,
    backgroundColor: "#0A3D62",
    color: "#ffffff",
    fontSize: 17,
    fontWeight: '700',
    padding: 4,
    paddingHorizontal:5


  }
})