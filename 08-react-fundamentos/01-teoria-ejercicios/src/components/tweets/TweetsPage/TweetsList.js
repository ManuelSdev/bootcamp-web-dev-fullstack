import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import Tweet, { tweetType } from './Tweet';

// const renderTweet = history => tweet => (
//   <Tweet key={tweet.id} {...tweet} history={history} />
// );

const TweetsList = ({ tweets }) => {
  // const handleClick = tweetId => {
  //   history.push(`/tweet/${tweetId}`);
  // };

  return (
    <ul className="tweetsList">
      {tweets.map(tweet => (
        <li key={tweet.id}>
          <Link to={`/tweet/${tweet.id}`}>
            <Tweet
              {...tweet}
              // history={history}
              // onClick={() => handleClick(tweet.id)}
            />
          </Link>
        </li>
      ))}
      {/* {tweets.map(renderTweet(history))} */}
    </ul>
  );
};

TweetsList.propTypes = {
  tweets: T.arrayOf(T.shape(tweetType)),
};

export default TweetsList;
