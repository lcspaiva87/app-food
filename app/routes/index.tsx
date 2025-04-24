import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoriesScreen } from '../screens/[tableId]/categories'
import { TableScreen } from '../screens/table'

// Define the types for our route parameters
export type RootStackParamList = {
  Table: undefined
  categories: { tableId: string }
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Table">
      <Screen name="categories" component={CategoriesScreen} />
      <Screen name="Table" component={TableScreen} />
    </Navigator>
  )
}
