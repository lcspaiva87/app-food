import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function TableScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-bold">Mesas</Text>
      <TextInput
        placeholder="Digite n°  da mesa/comanda"
        className="border-2 border-gray-300 rounded-md p-2"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Padding nas laterais
    paddingTop: 16, // Padding no topo
  },
})
