import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../hooks/useFeedbackItemsContext";

function FeedbackList() {
  const { loading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
