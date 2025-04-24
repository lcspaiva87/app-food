import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ParamListBase } from '@react-navigation/native'

type NavigationProp = NativeStackNavigationProp<ParamListBase>

export const TableScreen = () => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')
  const navigation = useNavigation<NavigationProp>()

  const tableNumbers = Array.from({ length: 100 }, (_, i) => {
    return (i + 1).toString().padStart(2, '0')
  })

  const handleTableClick = (number: string) => {
    setSelectedTable(number)

    // Navigate to categories screen with table number as parameter
    navigation.navigate('categories', { tableId: number })
  }

  const handleNumberInput = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '')
    setSearch(numericText)
  }

  const filteredTableNumbers = tableNumbers.filter((number) =>
    number.includes(search),
  )
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../../assets/images/bg1.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Mesas</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite n° da mesa/comanda"
            placeholderTextColor="rgba(0, 0, 0, 0.36)"
            textAlign="center"
            value={search}
            onChangeText={handleNumberInput}
            keyboardType="decimal-pad"
          />
          <ScrollView>
            <View style={styles.grid}>
              {filteredTableNumbers.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.tableCard,
                    {
                      backgroundColor:
                        selectedTable === number ? '#ef4444' : '#2cca74',
                    },
                  ]}
                  onPress={() => handleTableClick(number)}
                >
                  <Text style={styles.tableNumber}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
