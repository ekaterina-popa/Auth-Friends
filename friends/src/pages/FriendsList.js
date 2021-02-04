import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = () => {
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

  /*const deleteFriend = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete("http://localhost:5000/api/friends/:id", {
        headers: {
          authorization: token,
        },
        friendId: id,
      })
      .then((res) => console.log("list of filtered friends", res.data));
  };*/

  return (
    <div>
      {friendsList.map((friend, idx) => {
        return (
          <div key={idx}>
            <div>{friend.name}</div>
            <button type="button">Update</button>
            <button type="button">Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default FriendsList;
