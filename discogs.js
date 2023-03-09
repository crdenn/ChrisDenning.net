import axios from 'axios';

const username = 'crdenn';
const apiKey = 'TiHVFnILcFuerMhmsvWAyAxegFoZYurMuLnpXCTx';
const folderId = '290644';

const url = `https://api.discogs.com/users/${username}/collection/folders/${folderId}/releases`;
const headers = {
  Authorization: `Discogs token=${apiKey}`,
};

async function fetchCollectionItems(folderId) {
    try {
      const response = await axios.get(url, { headers });
      const data = response.data;
      const releases = Array.isArray(data.releases) ? data.releases : Array.from(data.releases);
      return releases;
    } catch (error) {
      console.error(error);
    }
  }

export default fetchCollectionItems;