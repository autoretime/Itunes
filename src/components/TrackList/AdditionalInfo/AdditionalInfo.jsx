import React from "react";
import styles from "./AdditionalInfo.module.css";
import DurationToMillisAndSec from "./DurationToMillisAndSec";

const AdditionalInfo = ({ index, track }) => {
  return (
    <div className={`${styles.AdditionalInfo} ${index % 2 ? "" : styles.odd}`}>
      <div></div>
      <div>
        <span>
          {track.artist} - {track.trackName}
          <i className={"fa fa-music"} />
        </span>
      </div>
      <div></div>
      <div></div>
      <div>
        <div>
          <strong>Collection: </strong>
          {track.collectionName}
        </div>
        <div>
          <strong>Track Count: </strong>
          {track.trackCount}
        </div>
        <div>
          <strong>Price: </strong>
          {track.collectionPrice}
        </div>
      </div>
      <div>
        <div>
          <strong>Track duration: </strong>
          {DurationToMillisAndSec(track.trackTimeMillis)} min
        </div>
        <div>
          <strong>Track Price: </strong>
          {track.trackPrice} USD
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
