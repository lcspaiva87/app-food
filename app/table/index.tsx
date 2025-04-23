import { Text, TextInput, View } from 'react-native'

export default function TableScreen() {
  return (
    <View>
      <Text className="text-3xl font-bold">Mesas</Text>
      <TextInput
        placeholder="Digite n°  da mesa/comanda"
        className="border-2 border-gray-300 rounded-md p-2"
      />
    </View>
  )
}
