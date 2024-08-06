import request from "./request";

const BASE_URL = "http://localhost:3030/data/reviews";

function createReview(listingId, text) {
  return request.post(BASE_URL, { listingId, text });
}

// const createReview = (listingId, text) => {
//   return request.post(BASE_URL, { listingId, text });
// };

// const getAllReviews = (listingId) => {
//   const params = new URLSearchParams({
//     where: `listingId="${listingId}"`,
//     load: `author=_ownerId:users`,
//   });
//   return request.get(`${BASE_URL}?${params.toString()}`);
// };

function getAllReviews(listingId) {
  const params = new URLSearchParams({
    where: `listingId="${listingId}"`,
    load: `author=_ownerId:users`,
  });
  return request.get(`${BASE_URL}?${params.toString()}`);
}

const reviewsAPI = {
  createReview,
  getAllReviews,
};

export default reviewsAPI;
