import React from "react";
import DateRangeSelection from "../../components/DateRangeSelector/DateRangeSelector";
import { useCommitsState } from "../../shared/store";

const CommitList = () => {
  const { state, dispatch } = useCommitsState();
  console.log({ state });
  return (
    <section>
      Commit list....
      <DateRangeSelection
        defaultEndDate={state.endDate}
        defaultStartDate={state.startDate}
        handleBtnClick={(data) => {
          console.log("data -", data);
        }}
      />
    </section>
  );
};

export default CommitList;
