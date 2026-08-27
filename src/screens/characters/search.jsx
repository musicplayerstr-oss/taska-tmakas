import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchCharacters = () => {
  return (
    <View style={styles.container}>
      <Text>searchCharacters</Text>
    </View>
  )
}

export default SearchCharacters

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})