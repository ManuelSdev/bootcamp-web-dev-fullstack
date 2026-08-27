import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import LikeButton from './LikeButton';
import Photo from '../../shared/Photo';
import defaultPhoto from '../../../assets/default_profile.png';
import './Tweet.css';

const Tweet = ({ content, updatedAt, user, likes }) => {
  const handleLike = ev => {
    ev.preventDefault();
    // Manage like/unlike flow
    console.log(ev);
  };

  return (
    <article className="tweet bordered">
      <div className="left">
        <Photo src={defaultPhoto} className="tweet-photo" />
      </div>
      <div className="right">
        <div className="tweet-header">
          <span className="tweet-name">{user.name}</span>
          <span className="tweet-username">{user.username}</span>
          <span className="tweet-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
          <div className="tweet-actions">
            <LikeButton onLike={handleLike}>{likes.length || null}</LikeButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export const tweetType = {
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  updatedAt: T.string.isRequired,
  content: T.string,
  likes: T.arrayOf(T.shape({ userId: T.string.isRequired }).isRequired)
    .isRequired,
};

Tweet.propTypes = tweetType;

Tweet.defaultProps = {
  content: 'Nothing here!',
};

export default Tweet;
