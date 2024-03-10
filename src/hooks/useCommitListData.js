import { useEffect, useState } from "react";
import { ACTIONS, URLS } from "../shared/constants";
import { CacheManager } from "../shared/cacheStore";

const getCommitListApiUrl = ({
  startDate,
  endDate,
  pageNo,
  perPageItemCount,
}) => {
  return `${URLS.COMMIT_LIST}?since=${startDate}&until=${endDate}&page=${pageNo}&per_page=${perPageItemCount}`;
};

const useCommitListData = (state, dispatch) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: false,
    data: null,
  });
  const { startDate, endDate, pageNo, perPageItemCount } = state || {};

  useEffect(() => {
    const fetchApiData = async () => {
      setApiData((prev) => ({ ...prev, loading: true }));
      try {
        const apiResp = await fetch(
          getCommitListApiUrl({ startDate, endDate, pageNo, perPageItemCount }),
          {
            headers: {
              Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN,
            },
          }
        );
        if (!apiResp.ok) {
          setApiData((prev) => ({ ...prev, loading: false, error: true }));
        }
        const apiresponseData = await apiResp.json();
        console.log("API DATA -", apiresponseData);
        const normalisedCommitsData = CacheManager.makeNormalisedData(
          apiresponseData,
          "sha"
        );
        CacheManager.updateCache("commits_list", { ...normalisedCommitsData });
        CacheManager.updateCache("commits_list_previous", apiresponseData);
        setApiData({ loading: false, error: false, data: apiresponseData });
      } catch (err) {
        setApiData((prev) => ({ ...prev, loading: false, error: true }));
      } finally {
        dispatch({ type: ACTIONS.SET__MAIN_LOADING, payload: false });
      }
    };

    fetchApiData();
  }, [startDate, endDate, pageNo, perPageItemCount]);

  return apiData;
};

export default useCommitListData;
