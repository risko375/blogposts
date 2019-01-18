import axios from 'axios';

// create an instance of axios with baseURL to make api call
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
