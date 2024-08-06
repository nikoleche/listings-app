import { useEffect, useState } from "react";
import reviewsAPI from "../api/reviewsAPI";

export function useCreateReview() {
  function createHandler(listingId, review) {
    reviewsAPI.createReview(listingId, review);
  }
  return createHandler;
}

export function useGetAllReviews(listingId) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await reviewsAPI.getAllReviews(listingId);
      setReviews(result);
    })();
  }, [listingId]);

  return [reviews, setReviews];
}
