/* eslint-disable */

import { get, save } from '../Objects/apiScore';

jest.mock('../Objects/apiScore');

describe('Api score tests', () => {
  get.mockResolvedValue({
    data: {
      result: [
        { name: 'name1', score: 100 },
        { name: 'name2', score: 200 },
      ],
    },
  });

  save.mockImplementation((name, score) => new Promise((resolve, reject) => {
    if (!name) {
      reject({ result: 'Name empty' });
    } else if (!score) {
      reject({ result: 'Invalid score' });
    } else {
      resolve({ result: 'Succcess' });
    }
  }));

  test('should get users', () => {
    get().then(response => expect(response).toEqual({
      data: {
        result: [
          { name: 'name1', score: 100 },
          { name: 'name2', score: 200 },
        ],
      },
    }));
  });

  test('should post new score', () => {
    save('name1', 100).then(response => expect(response)
      .toEqual({ result: 'Succcess' }));
  });

  test('it should fail when a name is not given,', () => {
    save().catch(err => expect(err)
      .toEqual({ result: 'Name empty' }));
  });

  test('it should fail when a score is not given', () => {
    save('name1').catch(err => expect(err)
      .toEqual({ result: 'Invalid score' }));
  });
});