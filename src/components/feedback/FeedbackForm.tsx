import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = ev.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAddToList(text);
    console.log(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder="Insert"
        spellCheck={false}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, rememeber to #hastag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>SUBMIT</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
