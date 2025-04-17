import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import SplashScreenSvg from '@/assets/images/splash-screen/splash-screen.svg'

export default function SplashScreenPage() {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [])

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  })

  return (
    <View className="flex-1 items-center justify-center p-5">
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradient
        colors={['#87CEEB', '#9370DB', '#BA55D3', '#FF69B4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.3, 0.6, 1]}
        style={styles.gradient}
      >
        <View className="w-full items-center mb-8">
          <Text className="text-4xl font-bold text-white text-center">
            O serviço de
          </Text>
          <Text className="text-4xl font-bold text-white text-center">
            entrega de comida
          </Text>
          <Text className="text-4xl font-bold text-white text-center">
            mais rápido
          </Text>
        </View>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <SplashScreenSvg width={500} height={500} />
        </Animated.View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
