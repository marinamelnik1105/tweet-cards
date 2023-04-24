import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import * as api from '../services/api';
export const TweetsItem = ({ user }) => {
  let { avatar, tweets, followers, id } = user;

  const [following, setFollowing] = useState(false);
  const [updateFollowers, setUpdateFollowers] = useState(followers);

  const onClickFollow = async () => {
    const putFollow = async followers => {
      try {
        await api.putFollow(id, followers);
      } catch (error) {
        console.log(error);
      }
    };
    if (!following) {
      //   let increment = (followers += 1);
      setUpdateFollowers(prevState => prevState + 1);
      setFollowing(true);
    } else {
      //   let increment = (followers -= 1);
      setUpdateFollowers(prevState => prevState - 1);
      setFollowing(false);
    }
    await putFollow(followers);
  };

  useEffect(() => {
    const savedFollow = localStorage.getItem(`follow${id}`);
    if (savedFollow !== null) {
      const parsedFollow = JSON.parse(savedFollow);
      setFollowing(parsedFollow.following);
      setUpdateFollowers(parsedFollow.updateFollowers);
    }
  }, [id]);

  useEffect(() => {
    const followArray = { id, following, updateFollowers };

    localStorage.setItem(`follow${id}`, JSON.stringify(followArray));
  }, [id, following, updateFollowers]);

  return (
    <li>
      <div>
        <img src={logo} alt="logo" />

        <img src={avatar} width="100px" alt="user-avatar" />
        <ul>
          <li>
            <p>{tweets} tweets</p>
          </li>
          <li>
            <p>{updateFollowers} followers</p>
          </li>
        </ul>
      </div>
      <button type="button" onClick={onClickFollow}>
        {following ? 'Following' : 'Follow'}
      </button>
    </li>
  );
};
