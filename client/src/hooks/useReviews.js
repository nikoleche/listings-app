import { useEffect, useState } from "react";
import reviewsAPI from "../api/reviewsAPI";

export function useGetAllReviews(listingId) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await reviewsAPI.getAllReviews(listingId);
        setReviews(result);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [listingId]);

  return [reviews, setReviews];
}

export function useCreateReview() {
  const createHandler = (listingId, review) =>
    reviewsAPI.createReview(listingId, review);
  return createHandler;
}
