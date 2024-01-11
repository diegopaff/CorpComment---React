import { createContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../lib/types";
import { GET_FEEDBACKS_URL } from "../lib/constants";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContextProvider = {
  feedbackItems: TFeedbackItem[];
  filteredFeedbackItems: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};
export const FeedbackItemsContext =
  createContext<TFeedbackItemsContextProvider | null>(null);

function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const badge = companyName.substring(0, 1).toUpperCase();

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: badge,
    };

    // Optimistic UI render -> set the feedbackItems with the new element localy, as in the future will come from the api
    //setFeedbackItems([...feedbackItems, newItem]);

    // send it to server
    await fetch(GET_FEEDBACKS_URL, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

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

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        loading,
        errorMessage,
        companyList,
        handleAddToList,
        filteredFeedbackItems,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export default FeedbackItemsContextProvider;
