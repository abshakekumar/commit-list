import React from "react";
import DateRangeSelection from "../../components/DateRangeSelector/DateRangeSelector";
import { useCommitsState } from "../../shared/store";
import { ACTIONS, ITEMS_PER_PAGE } from "../../shared/constants";
import useCommitListData from "../../hooks/useCommitListData";
import Loading from "../../components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import NoDataAvailable from "../../components/NoDataAvailable/NoDataAvailable";
import CommitsTable from "../../components/CommitsTable/CommitsTable";
import "./CommitList.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import { CacheManager } from "../../shared/cacheStore";

const CommitList = () => {
  const { state, dispatch } = useCommitsState();
  const { loading, error, data } = useCommitListData(state, dispatch);
  return (
    <section className="commitlist__wrapper">
      <DateRangeSelection
        defaultEndDate={state.endDate}
        defaultStartDate={state.startDate}
        handleBtnClick={(data) => {
          CacheManager.resetCacheKey("commits_list");
          CacheManager.resetCacheKey("commits_list_previous");
          dispatch({ type: ACTIONS.SET__END_DATE, payload: data.endDate });
          dispatch({ type: ACTIONS.SET__START_DATE, payload: data.startDate });
          dispatch({ type: ACTIONS.SET__PAGE_NO, payload: 1 });
          dispatch({ type: ACTIONS.SET__MAIN_LOADING, payload: true });
        }}
      />
      <Dropdown
        options={ITEMS_PER_PAGE}
        selectedVal={state.perPageItemCount}
        handleOptionChange={(value) => {
          CacheManager.resetCacheKey("commits_list");
          CacheManager.resetCacheKey("commits_list_previous");
          console.log("State", CacheManager.getCacheData());
          dispatch({ type: ACTIONS.SET__PER_PAGE, payload: value });
          dispatch({ type: ACTIONS.SET__PAGE_NO, payload: 1 });
          dispatch({ type: ACTIONS.SET__MAIN_LOADING, payload: true });
        }}
      />
      <section className="commitlist__tablewrapper">
        {state.loadingMain ? (
          <Loading>main loading....</Loading>
        ) : (
          <CommitsTable
            loading={loading}
            error={error}
            data={data}
            list={data}
          />
        )}
      </section>
    </section>
  );
};

export default CommitList;
