import { useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import * as api from '../../components/services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Button, Div, P, StyledLink } from './Tweets.styled';

const Tweets = () => {
  const [notEmpty, setNotEmpty] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(2);
  const [pages, setPages] = useState(1);
  const [btnShow, setBtnShow] = useState(false);

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
        setBtnShow(true);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    getTweets();
  }, []);

  return (
    <section>
      <StyledLink to="/">
        <HiArrowLeft />
        <P>Back</P>
      </StyledLink>
      {notEmpty && <TweetsList users={users} />}
      <Div>
        {pages >= page && btnShow && (
          <Button onClick={onClickLoadMore}>load more</Button>
        )}
      </Div>
    </section>
  );
};

export default Tweets;
