import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

function HashtagList() {
  //const { companyList, handleSelectCompany } = useFeedbackItemsContext();

  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
