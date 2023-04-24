import { useEffect, useState } from 'react';
import * as api from '../components/services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';

const Tweets = () => {
  const [notEmpty, setNotEmpty] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(2);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getAllTweets = async () => {
      try {
        const { data } = await api.getAllTweets();
        setPages(data.length / 3);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTweets();
  }, []);

  const onClickLoadMore = async () => {
    try {
      setPage(prevState => prevState + 1);
      const { data } = await api.getTweets(page);
      setUsers(prevState => [...prevState, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTweets = async () => {
      try {
        const { data } = await api.getTweets();
        setUsers(data);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    getTweets();
  }, []);

  return (
    <div>
      {notEmpty && <TweetsList users={users} />}
      {pages >= page && <button onClick={onClickLoadMore}>Load More</button>}
    </div>
  );
};

export default Tweets;
