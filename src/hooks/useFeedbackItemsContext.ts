import { useContext } from "react";
import { FeedbackItemsContext } from "../context/FeedbackItemsContextProvider";

// custom hook to use the FeedbackItemsContext in typescript
export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList Component "
    );
  }
  return context;
}
