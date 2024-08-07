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

function getBySearch(searchQuery) {
  return request.get(`${BASE_URL}?where=title%20LIKE%20%22${searchQuery}%22`);
}

function getUserListings(userId) {
  return request.get(`${BASE_URL}?where=_ownerId%20IN%20(%22${userId}%22)`);
}

// http://localhost:3030/data/listings?where=_ownerId IN ("60f0cf0b-34b0-4abd-9769-8c42f830dffc")

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
  getBySearch,
  getUserListings,
  addListing,
  removeListing,
  updateListing,
};

export default listingsAPI;
