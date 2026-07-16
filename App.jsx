import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState} from 'react'

import {COLORS} from './src/util/constant'
const App = () => {
const [userChoice, setUserChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult] = useState(null);

  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.container} />
      <Text style={styles.title}>TAŞ KAĞIT MAKAS</Text>
      <Text style={styles.choiceText}>Kullanıcının Seçimi:</Text>
    </SafeAreaView>
  )
}

export default App

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom:20
  },
  choiceText:{
    marginVertical:20,
    fontSize: 20,
    color: COLORS.white
  }
})