import React, { useState, useEffect } from "react";
import "./Ads.scss";

const Ads = () => {
  const [ads, setAds] = useState([]);

  async function fetchAds() {
    let response = await fetch("/api/store/ads", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    });
    response = await response.json();
    setAds(response);
  }

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
      <div>Ads:</div>
      {ads.map((ad) => (
        <div key={ad._id}>
          {ad.title}
          {ad.description}
          {ad.price}
          <br />
        </div>
      ))}
    </>
  );
};
export default Ads;
