import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch } from '../hooks/hooks';
import { toggleTodo } from '../../todoSlice';
import { deleteTodo } from '../../todoSlice';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.todoContainer}
        onPress={() => dispatch(toggleTodo(id))}
      >
        <View style={[styles.checkbox, completed && styles.checked]}>
          {completed && <Text style={styles.checkmark}></Text>}
        </View>
        <Text style={[styles.todoText, completed && styles.completedText]}>
          {text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(deleteTodo(id))}
      >
        <Text style={styles.deleteText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF3830',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TodoItem;
