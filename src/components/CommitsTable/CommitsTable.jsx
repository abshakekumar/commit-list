import React from "react";
import "./CommitsTable.css";
import { getFormattedDate } from "../../shared/utils";

const CommitsTable = ({ list = [] }) => {
  console.log("Commits table - ", list);
  const renderCommitRow = (item, index) => {
    const {
      sha,
      commit: { message, author },
      author: authordetails,
    } = item;
    return (
      <div className="commitstable__commit" key={sha}>
        <h3>{message}</h3>
        <div className="commitstable__commit-timestamp">
          {getFormattedDate(author.date)}
        </div>
        <div className="commitstable__commit-author">
          <span className="commitstable__commit-author--avatar">
            <img src={authordetails.avatar_url}></img>
          </span>
          <span className="commitstable__commit-author--name">
            {author.name}
          </span>
          <span className="commitstable__commit-author--email">
            {author.email}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="commitstable__wrapper">
      {list.map(renderCommitRow)}
    </section>
  );
};

export default CommitsTable;
