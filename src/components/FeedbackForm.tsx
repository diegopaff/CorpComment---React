function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="Insert"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, rememeber to #hastag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>SUBMIT</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
