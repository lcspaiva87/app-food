import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoriesScreen } from '../screens/categories'
import { TableScreen } from '../screens/table'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Table">
      <Screen name="categories" component={CategoriesScreen} />
      <Screen name="Table" component={TableScreen} />
    </Navigator>
  )
}
