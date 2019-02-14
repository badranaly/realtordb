import axios  from 'axios';

export const authenticateUser = (username, password) => {
    console.log("inside authenticate user", username, " ", password);
    return axios('http://localhost:3000/api/', {
        method: "POST",
        data: {
            username,
            password
        }
      })
}