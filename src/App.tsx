import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashstagList from "./components/hashtag/HashtagList";

import FeedbackItemsContextProvider from "./context/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashstagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
