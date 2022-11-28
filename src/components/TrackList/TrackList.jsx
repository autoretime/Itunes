import React from "react";
import styles from "./TrackList.module.css";
import TrackItem from "./TrackItem/TrackItem";
import NoTracks from "./NoTracks/NoTracks";
// import DurationToMillisAndSec from './DurationToMillisAndSec';

const TrackList = ({ tracks, expandedTrack, expandTrackHandler }) => {
  const trackItems =
    !!tracks &&
    tracks.map((track, index) => {
      return (
        <TrackItem
          key={index}
          index={index}
          track={track}
          expandedTrack={expandedTrack}
          expandTrackHandler={expandTrackHandler}
        />
      );
    });

  return (
    <>
      <div className={styles.TrackList}>
        <div></div>
        <div>Artist</div>
        <div>Track</div>
        <div>Collection</div>
        <div>Genre</div>
        <div></div>
      </div>
      <hr />
      {trackItems.length ? trackItems : <NoTracks />}
    </>
  );
};

export default TrackList;
