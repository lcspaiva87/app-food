import { StyleSheet, Platform, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 16 : 16,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginLeft: 8,
  },
  tableInfo: {
    marginLeft: 'auto',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 80,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 13,
    color: '#B0B0B0',
  },
  burgerItem: {
    marginBottom: 21,
  },
  burgerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  burgerTitle: {
    fontSize: 13,
    marginBottom: 8,
  },
  burgerDescription: {
    fontSize: 9,
    width: 220,
  },
  burgerImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 10,
  },
})
