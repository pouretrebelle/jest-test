import BugsnagStore from 'BugsnagStore';

class Api {
  get = (uri, params) => {
    return fetch(uri, params);
  };
}
