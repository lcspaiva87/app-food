import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import 'react-native-reanimated'
import '../styles/global.css'

import SplashScreenPage from './SplashScreen'
import { Routes } from './routes/app.routes'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loading, setLoading] = useState(true)

  // Carrega as fontes
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

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

  // Para teste, use diretamente o Routes para mostrar a aplicação principal
  return <Routes />
}
