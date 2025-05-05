import React from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ParamListBase, RouteProp } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { styles } from './styles'

// Types for burger items
interface BurgerItem {
  id: number
  title: string
  description: string
  image: string
}

type RootStackParamList = {
  categorySlug: {
    categoryId: number
    tableId?: string
    categoryImage: string
  }
}

type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'categorySlug'>
type NavigationProp = NativeStackNavigationProp<ParamListBase>

const CATEGORIES_MAP = {
  1: 'HAMBURGUER',
  2: 'PASTEIS',
  3: 'SOBREMESAS',
  4: 'BEBIDAS',
  5: 'PORÇÕES',
  6: 'COMBOS',
}

// Burger item data
const burgerItems: BurgerItem[] = [
  {
    id: 1,
    title: '100 Noção',
    description:
      '120g de carne caseira recheada com mussarela, bacon, alface e tomate no pão brioche.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  },
  {
    id: 2,
    title: '100 Noção',
    description:
      '120g de carne caseira recheada com mussarela, bacon, alface e tomate no pão brioche.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  },
  {
    id: 3,
    title: '100 Noção',
    description:
      '120g de carne caseira recheada com mussarela, bacon, alface e tomate no pão brioche.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  },
  {
    id: 4,
    title: '100 Noção',
    description:
      '120g de carne caseira recheada com mussarela, bacon, alface e tomate no pão brioche.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  },
  {
    id: 5,
    title: '100 Noção',
    description:
      '120g de carne caseira recheada com mussarela, bacon, alface e tomate no pão brioche.',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
  },
]

export const CategorySlugScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const route = useRoute<CategoryScreenRouteProp>()
  const { categoryId, categoryImage } = route.params
  const categoryName = CATEGORIES_MAP[categoryId as keyof typeof CATEGORIES_MAP]

  const handleBackPress = () => {
    navigation.goBack()
  }
  // Render individual burger item
  const renderBurgerItem = ({ item }: { item: BurgerItem }) => (
    <View style={styles.burgerItem}>
      <View style={styles.burgerContent}>
        <View style={styles.textContainer}>
          <Text style={styles.burgerTitle}>{item.title}</Text>
          <Text style={styles.burgerDescription}>{item.description}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.burgerImage} />
      </View>
      <View style={styles.separator} />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Background Image and Overlay */}
      <Image
        source={{
          uri: categoryImage,
        }}
        style={styles.headerImage}
      />
      <View style={styles.overlay} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ArrowLeft size={16} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Text style={styles.categoryTitle}>{categoryName}</Text>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#B0B0B0" />
            <TextInput
              placeholder="Pesquisar"
              placeholderTextColor="#B0B0B0"
              style={styles.searchInput}
            />
          </View>
        </View>

        <FlatList
          data={burgerItems}
          renderItem={renderBurgerItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}
