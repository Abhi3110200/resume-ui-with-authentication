import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function HomeScreen() {
  const handleLogout = async()=>{
    await signOut(auth)
  }
  return (
   <SafeAreaView style={{
    flex:1, justifyContent:'center',
    alignItems:'center'
   }}>
    <Text>Home Page</Text>
    <TouchableOpacity onPress={handleLogout} style={{
      backgroundColor: 'red',
      padding:11,
      borderRadius:10,
    }}>
      <Text style={{color:'white', fontSize:30}}>Logout</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}