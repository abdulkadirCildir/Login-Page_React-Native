import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

import Img from './components/Img';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <Img/>
        
        <Inputs/>

        <Buttons/>

      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80CBC4',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
