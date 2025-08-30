import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch } from '../hooks/hooks';
import { Todo } from '../types/todo';
import { addTodo } from '../../todoSlice';
import { validateTodoText } from '../utils/todoUtils';
import { ERROR_MESSAGES } from '../../../shared/constants';
import { useCreateTodo } from '../hooks/todoHooks';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { createTodo } = useCreateTodo();

  const handleAdd = () => {
    const validation = validateTodoText(text);

    if (!validation.isValid) {
      setError(validation.error || ERROR_MESSAGES.VALIDATION_ERROR);
    }

    try {
      createTodo(text);
      setText('');
      setError(null);
    } catch (err) {
      setError(ERROR_MESSAGES.UNKNOWN_ERROR);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new todo..."
        placeholderTextColor="#999999"
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={[styles.addButton, !text.trim() && styles.addButtonDisabled]}
        onPress={handleAdd}
        disabled={!text.trim()}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#F8F8F8',
  },
  addButton: {
    marginLeft: 12,
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddTodo;
