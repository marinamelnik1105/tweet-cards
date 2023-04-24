import logo from '../../images/logo.png';
export const TweetsList = ({ users }) => {
  return (
    <>
      {
        <ul>
          {users.map(({ id, avatar, tweets, followers }) => (
            <li key={id}>
              <div>
                <img src={logo} alt="logo" />

                <img src={avatar} width="100px" alt="user-avatar" />
                <ul>
                  <li>
                    <p>{tweets} tweets</p>
                  </li>
                  <li>
                    <p>{followers} followers</p>
                  </li>
                </ul>
              </div>
              <button type="button" onClick={e => console.log(e)}>
                Follow
              </button>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
