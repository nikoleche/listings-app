import { useEffect, useState } from "react";
import listingsAPI from "../api/listingsAPI";

export function useGetAllListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await listingsAPI.getAll();
      setListings(result);
    })();
  }, []);
  return [listings];
}

export function useGetListing(listingId) {
  const [listing, setListing] = useState({});

  useEffect(() => {
    (async () => {
      const result = await listingsAPI.getListing(listingId);
      setListing(result);
    })();
  }, [listingId]);
  return [listing, setListing];
}

export function useGetListingsByCategory(categoryId) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await listingsAPI.getByCategory(categoryId);
      setListings(result);
    })();
  }, [categoryId]);
  return [listings];
}
