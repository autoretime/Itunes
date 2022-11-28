import React, { useState } from "react";
import styles from "./Music.module.css";
import SearchMusic from "../components/SearchMusic/SearchMusic";
import TrackList from "../components/TrackList/TrackList";

const Music = () => {
  const [fetchingProcess, setFetchingProcess] = useState(null);
  const [searchFieldState, setSearchFieldState] = useState("");
  const [expandedTrack, setExpandedTrack] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [, setFetchingTracks] = useState();

  const submitSearchHandler = (event) => {
    event.preventDefault();

    if (fetchingProcess) {
      return;
    }
    setFetchingProcess(true);

    const searchQuery = searchFieldState;
    const url = `https://itunes.apple.com/search?limit=12&explicit=no&term=${searchQuery}&country=RU&lang=EN`;

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(
        (data) => setTracks(data.results),
        setFetchingTracks(false),
        setExpandedTrack(null),
        setFetchingProcess(false)
      )
      .catch(() => alert("Something went wrong!"));
  };

  const searchChangeHandler = (newSearchState) => {
    setSearchFieldState(newSearchState);
  };

  const expandTrackHandler = (expandedTrackIndex) => {
    setExpandedTrack(
      expandedTrack === expandedTrackIndex ? null : expandedTrackIndex
    );
  };

  return (
    <div className={styles.Music}>
      <SearchMusic
        searchChangeHandler={searchChangeHandler}
        submitSearchHandler={submitSearchHandler}
      />
      <TrackList
        tracks={tracks}
        expandedTrack={expandedTrack}
        expandTrackHandler={expandTrackHandler}
      />
    </div>
  );
};

export default Music;
