import Axios from 'axios';

// Get jwt from Localstorage
const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : false;
if (jwt) Axios.defaults.headers.common['Authorization'] = jwt;

export default jwt;
