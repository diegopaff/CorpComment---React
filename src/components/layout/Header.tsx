import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  //const { handleAddToList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}

export default Header;
