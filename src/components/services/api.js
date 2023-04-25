import axios from 'axios';

axios.defaults.baseURL = 'https://644294cc33997d3ef9143f2a.mockapi.io/api/';

export async function getAllTweets() {
  try {
    const users = await axios.get(`users`);
    return users;
  } catch (error) {
    console.error(error);
  }
}

export const getTweets = async (page = 1) => {
  try {
    const users = await axios.get(`/users?page=${page}&limit=3`);
    return users;
  } catch (e) {
    console.log(e.message);
  }
};

export async function putFollow(id, value) {
  try {
    const user = await axios.put(`users/${id}`, { followers: value });
    return user;
  } catch (error) {
    console.error(error);
  }
}
