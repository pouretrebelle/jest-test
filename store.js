import CatalogueReleasesData from 'api/releases';

class store {
  async getData() {
    return await CatalogueReleasesData.getData(projectId);
  }
}

export default new store();
