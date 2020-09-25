import React, { useState, useEffect } from "react";
import "./Ad.scss";

const Ad = () => {
  const [ad, setAd] = useState("");
  async function getAd() {
    let response = await fetch("/api/store/getAd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
      body: JSON.stringify({
        adId: "5f6d4fb68561fd97e187b2d3" /* adId */,
      }),
    }).catch((err) => {
      alert(err);
    });
    if (!response.ok) {
    } else {
      response = await response.json();
      setAd(response);
    }
  }
  useEffect(() => {
    getAd();
  }, []);
  return (
    <>
      <div>Ad: {ad.title}</div>
    </>
  );
};
export default Ad;
