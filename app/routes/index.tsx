import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TableScreen from '../table'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="table" component={TableScreen} />
    </Navigator>
  )
}
