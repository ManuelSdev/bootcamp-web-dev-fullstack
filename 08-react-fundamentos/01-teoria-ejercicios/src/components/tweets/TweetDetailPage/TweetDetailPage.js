import React from 'react';
import Layout from '../../layout/Layout';

import { getTweetDetail } from '../../../api/tweets';
import { Redirect } from 'react-router';

class TweetDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: null,
      error: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getTweetDetail(match.params.tweetId)
      .then(tweet => this.setState({ tweet }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { tweet, error } = this.state;
    if (error && error.status === 404) {
      return <Redirect to="/404" />;
    }
    return (
      <Layout title="Tweet Detail" {...this.props}>
        <div>{JSON.stringify(tweet)}</div>
      </Layout>
    );
  }
}

export default TweetDetailPage;
