import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => handleDelete(feedback.id)} />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
