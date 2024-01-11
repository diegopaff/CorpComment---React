import FeedbackItem from "./FeedbackItem";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { TFeedbackItem } from "../../lib/types";

type FeedBackListProps = {
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  loading: boolean;
};

function FeedbackList({
  feedbackItems,
  errorMessage,
  loading,
}: FeedBackListProps) {
  return (
    <ol className="feedback-list">
      {loading && <Spinner />}

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
