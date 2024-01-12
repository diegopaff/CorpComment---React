import { useEffect, useState } from "react";
import { GET_FEEDBACKS_URL } from "../lib/constants";
import { TFeedbackItem } from "../lib/types";

function useFeedbakItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(GET_FEEDBACKS_URL);
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        setFeedbackItems(data.feedbacks);
        setLoading(false);
      } catch (error) {
        setErrorMessage("Something went wring");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    feedbackItems,
    loading,
    errorMessage,
    setFeedbackItems,
  };
}

export default useFeedbakItems;
