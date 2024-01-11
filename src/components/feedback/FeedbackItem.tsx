import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const { upvoteCount, badgeLetter, company, text, daysAgo } = feedbackItem;
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}

export default FeedbackItem;
