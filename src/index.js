// import { StrictMode, useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }

root.render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </StrictMode>
);
