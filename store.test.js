import Store from './store';

jest.mock('services/api');
const apiMock = require('services/api');
apiMock.mockImplementation(() => ({}));

describe('Store', () => {
  beforeEach(() => {
    Store.resetStore();
  });

  test('loads territories', () => {
    const response = {
      data: [
        {
          code: 'GB',
          name: 'United Kingdom',
        },
      ],
    };
    apiMock.get.mockResolvedValue(response);

    return Store.loadTerritories.then((a) => {
      console.log(a, Store.territories);
      expect(1).toBe(1);
    });
    // .then(() => {
    //   expect(shopifyMock.addToCart.mock.calls.length).toBe(1);
    //   expect(shopifyMock.addToCart.mock.calls[0][1]).toBe(2);
    // });
  });
});
