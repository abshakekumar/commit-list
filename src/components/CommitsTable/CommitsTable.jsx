import React from "react";
import "./CommitsTable.css";
import {
  getFormattedDate,
} from "../../shared/utils";
import { useNavigate } from "react-router-dom";

const CommitsTable = ({ list = [] }) => {
  console.log("Commits table - ", list);
  const navigate = useNavigate();
  const renderCommitRow = (item, index) => {
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
        <h3 className="commitstable__commit-message">{message}</h3>
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
