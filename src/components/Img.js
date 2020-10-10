import React from 'react';
import {
  Image, 
  StyleSheet, 
  SafeAreaView
} from 'react-native';

const Img = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.logo} 
        source={require('../images/shopping.png')} />
    </SafeAreaView>
  );
};

export default Img;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  logo: {
    width: 180,
    height: 180,
  },
});
