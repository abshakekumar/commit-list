import React from "react";
import DateRangeSelection from "../../components/DateRangeSelector/DateRangeSelector";
import { useCommitsState } from "../../shared/store";
import { ACTIONS } from "../../shared/constants";
import useCommitListData from "../../hooks/useCommitListData";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import NoDataAvailable from "../../components/NoDataAvailable/NoDataAvailable";
import CommitsTable from "../../components/CommitsTable/CommitsTable";
import "./CommitList.css";

const CommitList = () => {
  const { state, dispatch } = useCommitsState();
  const { loading, error, data } = useCommitListData(state);
  console.log({ state, data });
  return (
    <section className="commitlist__wrapper">
      <DateRangeSelection
        defaultEndDate={state.endDate}
        defaultStartDate={state.startDate}
        handleBtnClick={(data) => {
          dispatch({ type: ACTIONS.SET__END_DATE, payload: data.endDate });
          dispatch({ type: ACTIONS.SET__START_DATE, payload: data.startDate });
        }}
      />
      {state.endDate} - {state.startDate}
      <section className="commitlist__tablewrapper">
        {loading ? (
          <Loading>Please wait...</Loading>
        ) : error ? (
          <ErrorComponent>Error has occured!</ErrorComponent>
        ) : data ? (
          data.length ? (
            <CommitsTable list={data} />
          ) : (
            <NoDataAvailable>No Data present!</NoDataAvailable>
          )
        ) : (
          <NoDataAvailable>No Data</NoDataAvailable>
        )}
      </section>
    </section>
  );
};

export default CommitList;
