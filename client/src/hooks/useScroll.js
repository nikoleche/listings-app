import { useEffect } from "react";

export function useScroll(scrollRef) {
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, []);
}
