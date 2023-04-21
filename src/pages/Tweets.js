import { useEffect, useState } from 'react';
import * as api from '../components/services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';

const Tweets = () => {
  const [results, setResults] = useState([]);
  const [notEmpty, setNotEmpty] = useState(false);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const results = await api.getTweets();

        console.log({ results });
        setResults(results);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    getTweets();
  }, [notEmpty]);

  return <div>{notEmpty && <TweetsList results={results} />}</div>;
};

export default Tweets;
