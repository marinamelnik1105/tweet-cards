import { TweetsItem } from 'components/TweetsItem/TweetsItem';
export const TweetsList = ({ users }) => {
  return (
    <>
      {
        <ul>
          {users.map(user => (
            <TweetsItem key={user.id} user={user} />
          ))}
        </ul>
      }
    </>
  );
};
