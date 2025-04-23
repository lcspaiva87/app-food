import {
  DefaultTheme,
  DarkTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import '../styles/global.css'

import { useColorScheme } from '@/hooks/useColorScheme'
import theme from '@/themes'
import SplashScreenPage from './SplashScreen'
import LoginScreen from './auth/page'
import { Routes } from './routes/app.routes'

// Impede o SplashScreen de esconder automaticamente
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loading, setLoading] = useState(true)
  const [isAuthenticated] = useState(true)

  // Carrega as fontes
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.COLORS.GREEN_700,
      background: theme.COLORS.WHITE,
      card: theme.COLORS.GRAY_100,
      text: theme.COLORS.GRAY_700,
      border: theme.COLORS.GRAY_300,
      notification: theme.COLORS.GREEN_700,
    },
  }

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: theme.COLORS.GREEN_500,
      background: theme.COLORS.GRAY_700,
      card: theme.COLORS.GRAY_600,
      text: theme.COLORS.GRAY_100,
      border: theme.COLORS.GRAY_500,
      notification: theme.COLORS.GREEN_500,
    },
  }

  // Lida com erros no carregamento das fontes
  useEffect(() => {
    if (error) {
      console.error('Erro ao carregar fontes:', error)
      throw error
    }
  }, [error])

  // Esconde o SplashScreen depois que as fontes são carregadas
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  // Enquanto as fontes não são carregadas, não renderiza nada
  if (!loaded) {
    return null
  }

  // Renderiza a tela de splash enquanto carrega
  if (loading) {
    return <SplashScreenPage />
  }

  // Se não estiver autenticado, mostra a tela de login
  if (!isAuthenticated) {
    return <LoginScreen />
  }

  // Se estiver autenticado, mostra o sistema de navegação usando o Routes
  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? customDarkTheme : customLightTheme}
    >
      <Routes />
    </ThemeProvider>
  )
}
