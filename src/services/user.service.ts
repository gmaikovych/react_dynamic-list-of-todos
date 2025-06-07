import { User } from '../types/User';

export function getUser(id: number): Promise<User> {
  return fetch('../public/api/users/' + id + '.json')
    .then(response => {
      if (!response) {
        throw new Error();
      }

      return response.json();
    })
    .then(user => user);
}
