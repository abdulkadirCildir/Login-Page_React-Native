import React from 'react';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native';

const Buttons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Giris Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Kayit Ol</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1.4,
    justifyContent: 'flex-start',
  },

  buttonContainer: {
    backgroundColor: '#546E7A',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 200,
  },

  textStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
