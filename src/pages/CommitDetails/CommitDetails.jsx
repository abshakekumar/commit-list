import React from "react";
import { useParams } from "react-router-dom";

const CommitDetails = () => {
  const { id } = useParams();
  return <section>Commit Details....{id}</section>;
};

export default CommitDetails;
