import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import * as api from '../services/api';
import {
  Button,
  Div,
  ImageAvatar,
  ImageDiv,
  Item,
  Logo,
  P,
  UserInfoDiv,
  UserInfoList,
} from './TweetsItem.styled';
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
      setUpdateFollowers(prevState => prevState + 1);
      setFollowing(true);
    } else {
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

  const formatFollowers = updateFollowers.toLocaleString('en-US');
  return (
    <Item>
      <Div>
        <Logo src={logo} alt="logo" />
        <UserInfoDiv>
          {' '}
          <ImageDiv>
            <ImageAvatar src={avatar} width="100px" alt="user-avatar" />
          </ImageDiv>
          <UserInfoList>
            <li>
              <P>{tweets} tweets</P>
            </li>
            <li>
              <P>{formatFollowers} followers</P>
            </li>
          </UserInfoList>
          <Button type="button" following={following} onClick={onClickFollow}>
            {following ? 'Following' : 'Follow'}
          </Button>
        </UserInfoDiv>
      </Div>
    </Item>
  );
};
