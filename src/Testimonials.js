import { useState } from "react";
import Reviews from "./Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const length = Reviews.length;

  const handleNext = () => {
    if (index >= 0 && index < length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(length - 1);
    }
  };

  return (
    <div className="page testimonials">
      <h2>Testimonials</h2>
      <p>
        At consectetur lorem donec massa sapien faucibus et. Interdum
        consectetur libero id faucibus nisl tincidunt eget nullam. Sed arcu non
        odio euismod lacinia at.
      </p>
      <div className="review-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handlePrevious}
          className="controls"
        />
        <div className="reviews">
          <p>"{Reviews[index].review}"</p>
          <p>- {Reviews[index].name}</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={handleNext}
          className="controls"
        />
      </div>
    </div>
  );
}
