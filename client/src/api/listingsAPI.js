import request from "./request";

const BASE_URL = "http://localhost:3030/data/listings";

async function getAll() {
  const result = await request.get(BASE_URL);
  console.log(result);
  const listings = Object.values(result);
  return listings;
}

const listingsAPI = {
  getAll,
};

export default listingsAPI;
