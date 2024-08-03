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
