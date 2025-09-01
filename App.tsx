import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { logger } from './src/shared/utils/logger';
import React, { useEffect, useState } from 'react';
import { Todo } from './src/features/todo/types/todo';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './src/features/todo/components/AddTodo';
import TodoList from './src/features/todo/components/TodoList';
import { Provider } from 'react-redux';
import {store} from './src/app/store';
import TodoStats from './src/features/todo/components/TodoStats';
import { DialogContainer } from './src/shared/components/DialogContainer';

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F8F8F8" />

      <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
        <TodoStats />
      </View>

      <AddTodo  />

      <TodoList/>
      <DialogContainer/>
    </SafeAreaView>
  );
}

function App() {
  return(
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
});

export default App;
