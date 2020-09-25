import React, { useEffect } from "react";
import "./Store.scss";
import NewAd from "./NewAd/NewAd";
import Ad from "./Ad/Ad";
import Ads from "./Ads/Ads";

const Store = () => {
  useEffect(() => {}, []);

  return (
    <>
      Store page
      <NewAd />
      <Ad />
      <Ads />
    </>
  );
};
export default Store;
