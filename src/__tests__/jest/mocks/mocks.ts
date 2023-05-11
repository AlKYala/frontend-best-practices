import fetchData from "../../../stuff/apiCalls";

test('fetchData returns the correct data', async () => {

  const mockData = { foo: 'bar' };

  const mockResponse = {
    ok: true,
    json: () => Promise.resolve(mockData),
  };

  /*du kannst Fetch so mocken - jeder Aufruf von sfetch wird das zureuckgeben was resolvedValue gibt
  das wird den Aufruf von fetch in fetchData manipulieren
  */
  jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

  const data = await fetchData();
  expect(data).toEqual(mockData);
});



/*
//axios kriege ich nicht gemockt ey
//  SyntaxError: Cannot use import statement outside a module

import axios from 'axios';

jest.mock('axios');

test('fetchData returns the correct data', async () => {
  const data = { some: 'data' };
  axios.get.mockResolvedValue({ data });

  const result = await fetchData();

  expect(result).toEqual(data);
});

*/