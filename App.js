/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>  
    <View style={styles.container}> 
      <Text style={styles.text} >Hello world</Text>
    </View>   
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
