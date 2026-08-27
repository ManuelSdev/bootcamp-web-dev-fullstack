import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getLatestTweets } from '../../../api/tweets';
import scopedStyles from './TweetsPage.module.css';
import Layout from '../../layout/Layout';
import TweetsList from './TweetsList';
import { Button } from '../../shared';
import './TweetsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first twitter!</p>
    <Button as={Link} to="/tweet" variant="primary">
      Tweet
    </Button>
  </div>
);

const TweetsPage = ({ className, ...props }) => {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getLatestTweets().then(setTweets);
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      <div className={classnames(scopedStyles.tweetsPage, className)}>
        {tweets.length ? <TweetsList tweets={tweets} /> : <EmptyList />}
      </div>
    </Layout>
  );
};

export default TweetsPage;
