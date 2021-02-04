import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const getData = () => {
      const token = localStorage.getItem("token");

      axios
        .get("http://localhost:5000/api/friends", {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          console.log("list of friends comming from API", res.data);
          setFriendsList(res.data);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {friendsList.map((friend, idx) => {
        return <div key={idx}>{friend.name}</div>;
      })}
    </div>
  );
};
export default FriendsList;
