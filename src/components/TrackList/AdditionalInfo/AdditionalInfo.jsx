import React from 'react'
import styles from './AdditionalInfo.module.css'

const AdditionalInfo = ({
  index,
  artist,
  trackName,
  collection,
  trackCount,
  collectionPrice,
  trackTime,
  trackPrice,
  expandTrackHandler,
}) => {
  return (
    <div
      className={`${styles.AdditionalInfo} ${index % 2 ? null : styles.odd}`}
      onClick={expandTrackHandler(index)}
    >
      <div></div>
      <div>
        <span>
          {artist} - {trackName}
          <i className={"fa fa-music"} />
        </span>
      </div>
      <div></div>
      <div></div>
      <div>
        <div>
          <strong>Collection:</strong>{collection}
        </div>
        <div>
          <strong>Track Count:</strong>{trackCount}
        </div>
        <div>
          <strong>Price:</strong>{collectionPrice}
        </div>
      </div>
      <div>
        <div>
          <strong>Track duration:</strong>{trackTime}
        </div>
        <div>
          <strong>Track Price:</strong>{trackPrice} USD
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;