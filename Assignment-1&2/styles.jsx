import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    width: 400,
    fontSize: 28,
    marginBottom: 20,
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white', // Ensure inputs are visible
  },
  button: {
    width: '60%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 30,
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold' 
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;