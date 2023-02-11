export async function getAllPortals() {
    const url = `https://breaking-api.alpha.tv2.no/v1/public/portals?page=1`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
export async function getNews(portalId) {
    const url = `https://breaking-api.alpha.tv2.no/v1/public/posts?page=1&limit=10&portalId=${portalId}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }