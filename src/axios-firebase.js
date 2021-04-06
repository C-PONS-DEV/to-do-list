import axios from 'axios';

const instance = axios.create({
    baseURL:'https://to-do-list-935c2-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;