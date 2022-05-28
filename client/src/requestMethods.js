import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/"
//const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2NhZmMwZTg2OTFjNTBhYmY5M2ZkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzM3NTMwMSwiZXhwIjoxNjUzNjM0NTAxfQ.hYCyO4tmZKQwKbDZCxEkM156kDqdkP3pmqhVXqLt4vI"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    Headers: { token: `Bearer ${TOKEN}` }
})