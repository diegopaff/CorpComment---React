import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function FeedbackList() {
  //const { loading, errorMessage, filteredFeedbackItems } = useFeedbackItemsContext();

  const loading = useFeedbackItemsStore((state) => state.loading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );
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
