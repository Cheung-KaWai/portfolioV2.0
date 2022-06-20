import React, { useLayoutEffect, useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
