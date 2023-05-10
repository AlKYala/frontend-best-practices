// users.test.js

import { getUsers } from "../../../stuff/apiCalls";


/*Du kannst beliebige Funktionen hier shadowen! - 
der erste parameter ist wo es importiert wird, der zweite Parameter halt
 eine Anonyme funktion, wo du dann drin mit jest.fn() die Funktionen uebrschreibst */
jest.mock('../../../stuff/apiCalls', () => ({
  getUsers: jest.fn(() => Promise.resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])),
}));

test('getUsers returns a list of users', async () => {
  const users = await getUsers();
  expect(users).toStrictEqual([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});