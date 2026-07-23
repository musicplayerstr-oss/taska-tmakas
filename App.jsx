import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState} from 'react'

import {COLORS} from './src/util/constant'
const App = () => {
const [userChoice, setUserChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult] = useState(null);

const handleUserChoice = (userChoice) => {
  setUserChoice(userChoice);
  
  const computerChoice = randomComputerChoice();
  setComputerChoice(computerChoice);

  determineWinner(userChoice, computerChoice);
};

const randomComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  return computerChoice;
};

const determineWinner = (user, computer) => {
  if (user.name === computer.name) {
    setResult('Berabere');
  } else if (
    (user.name === 'Taş' && computer.name === 'Makas') ||
    (user.name === 'Kağıt' && computer.name === 'Taş') ||
    (user.name === 'Makas' && computer.name === 'Kağıt')
  ) {
    setResult('Kullanıcı Kazandı');
  } else {
    setResult('Bilgisayar Kazandı');
  }
};
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