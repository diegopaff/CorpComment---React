import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";
import { GET_FEEDBACKS_URL } from "../lib/constants";

type Store = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
  selectedCompany: string;
  companyList: string[];
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  loading: false,
  errorMessage: "",
  selectedCompany: "",
  companyList: [],
  getCompanyList: () => {
    const state = get();
    return state.feedbackItems
      .map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (item) => item.company === state.selectedCompany
        )
      : state.feedbackItems;
  },
  addItemToList: async (text: string) => {
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
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

    // send it to server
    await fetch(GET_FEEDBACKS_URL, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  fetchFeedbackItems: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await fetch(GET_FEEDBACKS_URL);
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      set(() => ({
        feedbackItems: data.feedbacks,
        loading: false,
      }));
    } catch (error) {
      set(() => ({
        errorMessage: "Something went wrong",
        loading: false,
      }));
    }
  },
}));
