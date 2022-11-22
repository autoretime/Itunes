import React from 'react'
import styles from './TrackList.module.css'
import TrackItem from "./TrackItem/TrackItem";
import NoTracks from "./NoTracks/NoTracks";

const TrackList = ({
                     tracks,
                     expandedTrack,
                     expandTrackHandler,
                   }) => {

  const trackItems = !!tracks && tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        index={index}
        image={track.artworkUrl100}
        artist={track.artistName}
        trackName={track.trackName}
        genre={track.primaryGenreName}
        collection={track.collectionName}
        trackCount={track.trackCount}
        collectionPrice={track.collectionPrice}
        trackTime={track.trackTimeMillis}
        trackPrice={track.trackPrice}
        expandedTrack={expandedTrack}
        expandTrackHandler={expandTrackHandler}
      />
    )
  })

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
      <hr/>
      {trackItems.length ? trackItems : <NoTracks/>}
    </>
  )
}

export default TrackList