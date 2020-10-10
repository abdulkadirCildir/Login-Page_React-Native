import React from 'react';
import {View, TextInput, StyleSheet, SafeAreaView} from 'react-native';

const Inputs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="E-posta giriniz..."
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="visible-password"
          placeholder="Sifre giriniz..."
        />
      </View>
    </SafeAreaView>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: 'white',
    padding: 3,
    margin: 20,
    borderColor: '#80CBC4',
    borderWidth: 1,
    borderRadius: 10,
    width: 370,
  },
});
