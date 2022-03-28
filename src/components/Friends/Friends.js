import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>Hello Friends, How are you</h2>
      <p>
        <small>Parle kichu taka dhar dis...: {friends.length}</small>
      </p>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
