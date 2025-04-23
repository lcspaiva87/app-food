import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Categories } from '../screens/categories'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="categories" component={Categories} />
    </Navigator>
  )
}
