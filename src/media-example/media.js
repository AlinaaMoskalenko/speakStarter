import React from 'react';
import PropTypes from 'prop-types';

import styles from './media-subtitles.module.scss';

const MediaSubtitles = ({ subtitles }) => {

  const subtitlesItem = subtitles.map((item, idx) => {
    const { word } = item;
    return (
      <span key={idx} className={styles.word}>
        { word }
      </span>
    );
  });

  return (
    <div className={styles.subtitlesBlock}>
      { subtitlesItem }
    </div>
  );
};

MediaSubtitles.defaultProps = {
  subtitles: [
    { word: 'Hello' }, { word: 'world'},
    { word: 'Hello' }, { word: 'world'}
  ]
}

MediaSubtitles.propTypes = {
  subtitles: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired
  }))
};

export default MediaSubtitles;