import { useEffect, useState } from "react";

export function useGetAllListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3030/jsonstore/listings");
      const result = await response.json();
      setListings(Object.values(result));
    })();
  }, []);
  return [listings];
}
