import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashstagList from "./components/hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashstagList />
    </div>
  );
}

export default App;
