import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./CommitsTable.css";
import { getFormattedDate, splitStrIntoArr } from "../../shared/utils";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useCommitsState } from "../../shared/store";
import { ACTIONS } from "../../shared/constants";
import { CacheManager } from "../../shared/cacheStore";
import useCommitListData from "../../hooks/useCommitListData";
import Loading from "../Loading/Loading";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import NoDataAvailable from "../NoDataAvailable/NoDataAvailable";

const IntersectionObserverHandler = () => {
  const { state, dispatch } = useCommitsState();
  const [refVar, isIntersecting] = useIntersectionObserver({
    callback: () => {
      dispatch({ type: ACTIONS.SET__PAGE_NO, payload: state.pageNo + 1 });
    },
  });

  return <p ref={refVar}>...</p>;
};

const CommitComponent = ({ item }) => {
  const navigate = useNavigate();
  const {
    sha,
    commit: { message, author },
    author: authordetails,
  } = item;
  return (
    <div
      className="commitstable__commit"
      key={sha}
      onClick={() => navigate(`/details/${sha}`)}
    >
      <h3 className="commitstable__commit-message">
        {splitStrIntoArr(message, "\n")[0]}
      </h3>
      <div className="commitstable__commit-timestamp">
        {getFormattedDate(author.date)}
      </div>
      <div className="commitstable__commit-author">
        <span className="commitstable__commit-author--avatar">
          <img src={authordetails.avatar_url}></img>
        </span>
        <span className="commitstable__commit-author--name">{author.name}</span>
        <span className="commitstable__commit-author--email">
          {author.email}
        </span>
      </div>
    </div>
  );
};

const CommitsTable = ({ loading, error, data, list = [] }) => {
  const totalListItems =
    CacheManager.getCacheItem("commits_list_previous") || [];
  const [localList, setLocalList] = useState(totalListItems);

  useEffect(() => {
    const totalListItems =
      CacheManager.getCacheItem("commits_list_previous") || [];
    setLocalList([...totalListItems]);
  }, [list]);

  return (
    <section className="commitstable__wrapper">
      {localList.map((listItem) => (
        <CommitComponent key={listItem.sha} item={listItem} />
      ))}

      {loading ? (
        <Loading>Please wait...</Loading>
      ) : error ? (
        <ErrorComponent>Error has occured!</ErrorComponent>
      ) : data ? (
        data.length ? (
          <IntersectionObserverHandler></IntersectionObserverHandler>
        ) : (
          <NoDataAvailable>No Data present!</NoDataAvailable>
        )
      ) : (
        <NoDataAvailable>No Data</NoDataAvailable>
      )}
    </section>
  );
};

export default CommitsTable;
