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

const listingsAPI = {
  getAll,
  getListing,
};

export default listingsAPI;
