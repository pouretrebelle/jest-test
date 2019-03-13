import Api from 'services/api';

class CatalogueReleases {
  get(query) {
    query = query || {};
    return Api.get('/catalogue/releases', { query }).then((r) => r.data);
  }
}
