import request from "./request";

const BASE_URL = "http://localhost:3030/data/listings";

async function getAll() {
  const result = await request.get(BASE_URL);
  const listings = Object.values(result);
  return listings;
}

function getListing(listingId) {
  return request.get(`${BASE_URL}/${listingId}`);
}

function getByCategory(categoryId) {
  return request.get(`${BASE_URL}?where=category%20IN%20(%22${categoryId}%22)`);
}

function addListing(listingData) {
  return request.post(`${BASE_URL}`, listingData);
}

function removeListing(listingId) {
  return request.remove(`${BASE_URL}/${listingId}`);
}

function updateListing(listingId, listingData) {
  return request.put(`${BASE_URL}/${listingId}`, listingData);
}

const listingsAPI = {
  getAll,
  getListing,
  getByCategory,
  addListing,
  removeListing,
  updateListing,
};

export default listingsAPI;
