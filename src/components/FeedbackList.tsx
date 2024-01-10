import { TriangleUpIcon } from "@radix-ui/react-icons";

function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>599</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>Diego</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            magni eligendi at ab? Labore, numquam.
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
}

export default FeedbackList;
