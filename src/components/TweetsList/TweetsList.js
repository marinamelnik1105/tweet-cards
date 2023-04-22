import logo from '../../images/logo.png';
export const TweetsList = ({ results }) => {
  return (
    <>
      {
        <ul>
          {results.data.map(({ id, avatar, tweets, followers }) => (
            <li key={id}>
              <div>
                <img src={logo} alt="logo" />

                <img src={avatar} width="100px" alt="user-avatar" />
                <ul>
                  <li>
                    <p>{tweets}</p>
                  </li>
                  <li>
                    <p>{followers}</p>
                  </li>
                </ul>
              </div>
              <button type="button">follow</button>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
