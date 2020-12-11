import { createClient } from 'contentful';
import { REACT_APP_API_SPACE, REACT_APP_ACCESS_TOKEN } from './pass';
export default createClient({
    space: REACT_APP_API_SPACE, //process.env.REACT_APP_API_SPACE
    accessToken: REACT_APP_ACCESS_TOKEN //process.env.REACT_APP_git ACCEESS_TOKEN
});