import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3ee065ab73da4be687e840115f22d28b'
  }
});