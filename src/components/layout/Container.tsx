import { TFeedbackItem } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type ContainerProps = {
  handleAddToList: (text: string) => void;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  loading: boolean;
};
function Container({
  handleAddToList,
  feedbackItems,
  errorMessage,
  loading,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        loading={loading}
      />
    </main>
  );
}

export default Container;
