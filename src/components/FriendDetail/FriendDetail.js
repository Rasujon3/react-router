import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  return (
    <div>
      <h2>THis is details about dosto: {friendId}</h2>
    </div>
  );
};

export default FriendDetail;
