import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { ShoppingBag } from 'lucide-react-native'

export default function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ShoppingBag size={32} color="#FFFFFF" />
      </View>
      <Text style={styles.text}>delivery </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 12,
  },
  text: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
  },
})
