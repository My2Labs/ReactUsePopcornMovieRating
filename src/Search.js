import { useEffect, useRef } from "react";
import { useKey } from "./hooks/useKey";

export function Search({ query, setQuery }) {
  // useEffect(function () {
  //   const element = document.querySelector(".search");
  //   console.log(element);
  //   element.focus();
  // }, []);

  const inputElement = useRef(null);

  // useKey("Enter", function () {
  //   if (document.activeElement === inputElement.current) return;
  //   inputElement.current.focus();
  //   setQuery("");
  // });

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Enter") {
          if (document.activeElement === inputElement.current) return;
          inputElement.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
