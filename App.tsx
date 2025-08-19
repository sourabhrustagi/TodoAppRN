/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { logger } from './src/utils/logger';
import { useEffect, useState } from 'react';

function App() {
  logger.info('App: Starting TodoRN application');
 
  const [count, setCount] = useState<number>(0);

  useEffect(()=>{
    console.log('count changed: ${count}');
    
    return ()=>{
      console.log('Cleanup before next effect or unmount');
    };
  }, [count])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Hello World2</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={()=> setCount(count+1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
