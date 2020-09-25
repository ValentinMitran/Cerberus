import React, { useState } from "react";
import "./NewAd.scss";
import { withRouter } from "react-router-dom";

const NewAd = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/store/ads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
      }),
    }).catch((err) => {
      alert(err);
    });
    response = await response.text();
    if (response === "Success") {
      history.push(`/admin`);
    }
  };
  return (
    <>
      <br />
      <form onSubmit={submitForm}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <input
          type="number"
          name=""
          id=""
          min="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default withRouter(NewAd);
