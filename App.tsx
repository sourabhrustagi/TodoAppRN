/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { logger } from './src/utils/logger';
import React, { useEffect, useState } from 'react';
import { Todo } from './src/types/todo';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './src/components/AddTodo';
import TodoList from './src/components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) =>{
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}: todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const completedCount = todos.filter((todo)=> todo.completed).length;
  const totalCount = todos.length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F8F8F8" />

      <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
        {totalCount > 0 && (
          <Text style = {styles.subtitle}>
            {completedCount} of {totalCount} tasks completed
          </Text>
        )}
      </View>

      <AddTodo onAdd={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </SafeAreaView>
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
