import React from 'react';
import './NewTweetPage.css';
import Layout from '../../layout/Layout';
import NewTweetForm from './NewTweetForm';
import { Photo } from '../../shared';
import defaultPhoto from '../../../assets/default_profile.png';
import { createTweet } from '../../../api/tweets';

import './NewTweetPage.css';
import { Redirect } from 'react-router';

const NewTweetPage = props => {
  const [error, setError] = React.useState(null);
  const [createdTweet, setCreatedTweet] = React.useState(null);

  const handleSubmit = async newTweet => {
    try {
      const tweet = await createTweet(newTweet);
      setCreatedTweet(tweet);
    } catch (error) {
      setError(true);
    }
  };

  if (error && error.status === 401) {
    return <Redirect to="/login" />;
  }

  if (createdTweet) {
    return <Redirect to={`/tweet/${createdTweet.id}`} />;
  }

  return (
    <Layout title="What are you thinking?" {...props}>
      <div className="newTweetPage bordered" style={{ borderBottomWidth: 10 }}>
        <div className="left">
          <Photo src={defaultPhoto} alt="" />
        </div>
        <div className="right">
          <NewTweetForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default NewTweetPage;
