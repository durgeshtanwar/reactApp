import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is feedback item no 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this is feedback item no 2",
      rating: 7,
    },
    {
      id: 3,
      text: "this is feedback item no 3",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // update feedback item with
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // set Item to be updated
  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleFeedback = (feed) => {
    feed.id = uuidv4();
    setFeedback([feed, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
