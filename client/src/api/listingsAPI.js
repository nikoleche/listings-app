import request from "./request";

const BASE_URL = "http://localhost:3030/data/listings";

async function getAll() {
  const result = await request.get(BASE_URL);
  const listings = Object.values(result);
  return listings;
}

async function getListing(listingId) {
  return await request.get(`${BASE_URL}/${listingId}`);
}

async function getByCategory(categoryId) {
  return await request.get(
    `${BASE_URL}?where=category%20IN%20(%22${categoryId}%22)`
  );
}

const listingsAPI = {
  getAll,
  getListing,
  getByCategory,
};

export default listingsAPI;
