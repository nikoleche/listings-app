import { useEffect } from "react";

export function useScroll(scrollRef) {
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  });
}

// [] left out on purpose, the hook needs to rerender upon category browsing
