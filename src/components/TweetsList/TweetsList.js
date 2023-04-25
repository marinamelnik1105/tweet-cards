import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { List } from './TweetsList.styled';
export const TweetsList = ({ users }) => {
  return (
    <>
      {
        <List>
          {users.map(user => (
            <TweetsItem key={user.id} user={user} />
          ))}
        </List>
      }
    </>
  );
};
