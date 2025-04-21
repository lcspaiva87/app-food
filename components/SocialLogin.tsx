import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function SocialLogin() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Google login')}
      >
        <AntDesign name="google" size={24} color="#EA4335" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Facebook login')}
      >
        <AntDesign name="facebook-square" size={24} color="#1877F2" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Twitter login')}
      >
        <AntDesign name="twitter" size={24} color="#1DA1F2" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})
