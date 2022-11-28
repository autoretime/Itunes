/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./TrackItem.module.css";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const TrackItem = ({ index, track, expandedTrack, expandTrackHandler }) => {
  const isExpanded = expandedTrack === track.trackId;

  const additionalInfo = isExpanded && (
    <AdditionalInfo
      index={index}
      track={track}
      expandTrackHandler={expandTrackHandler}
    />
  );

  return (
    <>
      <a
        href="#"
        onClick={() => expandTrackHandler(track.trackId)}
        className={`${styles.TrackItem} ${index % 2 ? "" : styles.odd}`}
      >
        <div>
          <img src={track.artworkUrl100} alt={"pic"} />
        </div>
        <div>{track.artistName}</div>
        <div>{track.trackName}</div>
        <div>{track.collectionName}</div>
        <div>{track.primaryGenreName}</div>
        <div className={styles.expandCollapseButton}>
          <i className={isExpanded ? "fa fa-minus" : "fa fa-plus"} />
        </div>
      </a>

      {additionalInfo}
    </>
  );
};

export default TrackItem;
