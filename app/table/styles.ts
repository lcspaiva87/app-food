import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6ff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.37,
  },
  input: {
    width: '100%',
    height: 42,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 17,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 5,
  },
  tableCard: {
    width: (width - 56) / 4,
    height: 57,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  createAccountButton: {
    width: '100%',
    height: 42,
    backgroundColor: 'rgba(172, 172, 172, 1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    shadowColor: '#452a7c',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
})
