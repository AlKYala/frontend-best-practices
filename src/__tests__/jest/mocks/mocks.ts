import {fetchData, fetchDataAxios} from "../../../stuff/apiCalls";

/**
 * Allgemeine Idee: mockResolvedValue wird die Rueckgabe einer Methode ueberschreiben
 */

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

  //mach das shadowing rueckgaengig
  global.fetch.mockRestore();
});




//axios kriege ich nicht gemockt ey
// - ja du musst     "test": "react-scripts test --transformIgnorePatterns 'node_modules/(?!axios)/'", - damit er halt axios mitimportieren kann und nicht aus nodeModules ignored

import axios from 'axios';

jest.mock('axios');

test('axios returns the correct data', async () => {
  const data = { some: 'data' };
  //get wird immer das hier returnen
  axios.get.mockResolvedValue({ data });

  const result = await fetchDataAxios();

  expect(result).toEqual(data);

  //mach das shadowing rueckgaengig
  axios.get.mockRestore();
});