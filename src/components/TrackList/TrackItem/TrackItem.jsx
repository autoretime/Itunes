import React from "react";
import styles from "./TrackItem.module.css";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const TrackItem = ({
  index,
  expandedTrack,
  artist,
  image,
  trackName,
  trackCount,
  trackTime,
  trackPrice,
  collection,
  collectionPrice,
  genre,
  expandTrackHandler,
}) => {
  const isExpanded = expandedTrack === index;

  const additionalInfo = isExpanded && (
    <AdditionalInfo
      index={index}
      artist={artist}
      trackName={trackName}
      collection={collection}
      trackCount={trackCount}
      collectionPrice={collectionPrice}
      trackTime={trackTime}
      trackPrice={trackPrice}
      expandTrackHandler={expandTrackHandler}
    />
  );

  return (
    <>
      <div
        className={`${styles.TrackItem} ${index % 2 ? null : styles.odd}`}
        onClick={() => expandTrackHandler(index)}
        
      >
        <div>
          <img src={image} alt={"pic"} />
        </div>
        <div>{artist}</div>
        <div>{trackName}</div>
        <div>{collection}</div>
        <div>{genre}</div>
        <div className={styles.expandCollapseButton}>
          <i className={isExpanded ? "fa fa-minus" : "fa fa-plus"} />
        </div>
      </div>
      {additionalInfo}
    </>
  );
};

export default TrackItem;
