import { useState, useEffect } from 'react';

export function useGetWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateMedia = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  return windowSize;
}

export default useGetWindowSize;