import React, { useState } from "react";
import axios from "axios";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("token from AddFriends.js", token);
    axios
      .post("http://localhost:5000/api/friends", {
        headers: { authorization: token },
        friend: newFriend,
      })
      .then((res) => console.log("new friend", res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={addNewFriend}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="age"
          value={newFriend.age}
          placeholder="Age"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          value={newFriend.email}
          placeholder="email"
          onChange={handleChange}
        ></input>
        <button type="submit">Add friend</button>
      </form>
    </div>
  );
};
export default AddFriend;
