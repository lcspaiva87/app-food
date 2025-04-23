import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native'
import { styles } from './styles'

const categories = [
  {
    id: 1,
    name: 'HAMBURGUER',
    image: require('../../../assets/categories/rectangle-157.png'),
  },
  {
    id: 2,
    name: 'PASTEIS',
    image: require('../../../assets/categories/rectangle-158.png'),
  },
  {
    id: 3,
    name: 'SOBREMESAS',
    image: require('../../../assets/categories/rectangle-159.png'),
  },
  {
    id: 4,
    name: 'BEBIDAS',
    image: require('../../../assets/categories/rectangle-160.png'),
  },
  {
    id: 5,
    name: 'PORÇÕES',
    image: require('../../../assets/categories/rectangle-161.png'),
  },
  {
    id: 6,
    name: 'COMBOS',
    image: require('../../../assets/categories/rectangle-162.png'),
  },
]
export const Categories = () => {
  const handleCategoryClick = (categoryId: number) => {
    console.log(`Category clicked: ${categoryId}`)
    // Add navigation logic here
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../../assets/images/bg1.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Categorias</Text>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            placeholderTextColor="#B0B0B0"
          />

          {/* Categories Grid */}
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryButton}
                onPress={() => handleCategoryClick(category.id)}
              >
                <Image source={category.image} style={styles.categoryImage} />
                <View style={styles.categoryLabel}>
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
