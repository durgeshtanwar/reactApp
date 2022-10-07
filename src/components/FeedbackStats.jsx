import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const averageRating =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>Reviews: {feedback.length}</h4>
      <h4>
        Average Rating :{" "}
        {isNaN(averageRating)
          ? ""
          : averageRating.toFixed(1).replace(/[.,]0$/, "")}
      </h4>
    </div>
  );
}

export default FeedbackStats;
