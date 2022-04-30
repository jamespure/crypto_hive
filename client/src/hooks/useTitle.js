import { useEffect, useRef } from "react";

const useTitle = (title, prevailOnUnMount = false) => {
  const titleRef = useRef(document.title);
  const titlePrefix = "crypto hive | ".toUpperCase();

  useEffect(() => {
    document.title = titlePrefix + title;
  }, [title, titlePrefix]);

  useEffect(() => {
    if (!prevailOnUnMount) {
      document.title = titlePrefix + titleRef.current;
    }
  }, [prevailOnUnMount, titlePrefix]);
};

export default useTitle;
