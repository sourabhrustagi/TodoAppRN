import { useAppDispatch } from '../hooks/hooks';
import { Todo } from '../types/todo';
import { addTodo } from '../../todoSlice';

export const useCreateTodo = () => {
  const dispatch = useAppDispatch();

  return {
    createTodo: (text: string) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
      };
      dispatch(addTodo(newTodo));
      return newTodo;
    },
  };
};
