import { Todo } from '../types/Todo';

export function getTaskList(): Promise<Todo[]> {
  return fetch('../public/api/todos.json')
    .then(response => {
      if (!response) {
        throw new Error();
      }

      return response.json();
    });
}
