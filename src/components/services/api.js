import axios from 'axios';
const BASE_URL = 'https://644294cc33997d3ef9143f2a.mockapi.io/api/';

export async function getTweets() {
  try {
    const { users } = await axios.get(`${BASE_URL}`);
    return users;
  } catch (error) {
    console.error(error);
  }
}
