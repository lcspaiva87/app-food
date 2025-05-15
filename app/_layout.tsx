import { Slot } from 'expo-router'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import '../styles/global.css'

import theme from '@/themes'
import SplashScreenPage from './SplashScreen'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loading, setLoading] = useState(true)

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.COLORS.GREEN_700,
      background: theme.COLORS.WHITE_DARKER,
      card: theme.COLORS.GRAY_100,
      text: theme.COLORS.GRAY_700,
      border: theme.COLORS.GRAY_300,
      notification: theme.COLORS.GREEN_700,
    },
  }

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  if (!loaded) return null
  if (loading) return <SplashScreenPage />

  return (
    <ThemeProvider value={customTheme}>
      <Slot />
    </ThemeProvider>
  )
}
