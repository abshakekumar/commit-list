import React from "react";
import { useParams } from "react-router-dom";
import { CacheManager } from "../../shared/cacheStore";
import NoDataAvailable from "../../components/NoDataAvailable/NoDataAvailable";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import { getFormattedDate } from "../../shared/utils";
import "./CommitDetails.css";

const CommitDetails = () => {
  const { id } = useParams();
  const commitData = CacheManager.getCacheDataById("commits_list", id);
  const renderCommitDetails = (commitData) => {
    const { author, commit, comments_url, html_url, sha, url } =
      commitData || {};
    const { author: commitAuthor, message } = commit || {};
    return (
      <section className="commitdetails__commit">
        <div className="commitdetails__commit-avatar">
          <img alt="commit author avatar" src={author.avatar_url} />
          <span className="commitdetails__commit-author--name">
            {commitAuthor.name}
          </span>
          <span className="commitdetails__commit-author--email">
            {commitAuthor.email}
          </span>
        </div>
        <aside>
          <div>Message </div>
          <pre className="commitdetails__commit-message">{message}</pre>
          <div>Timestamp</div>
          <div>{getFormattedDate(commitAuthor.date)}</div>
          <div>SHA</div>
          <div>{sha}</div>
          <div>Comments Url</div>
          <LinkComponent href={comments_url}>Redirect To Url</LinkComponent>

          <div>HTML url</div>
          <LinkComponent href={html_url}>Redirect To Url</LinkComponent>
        </aside>
      </section>
    );
  };

  return (
    <section className="commitdetails__wrapper">
      {commitData ? (
        renderCommitDetails(commitData)
      ) : (
        <NoDataAvailable>No Data for this commit id</NoDataAvailable>
      )}
    </section>
  );
};

export default CommitDetails;
