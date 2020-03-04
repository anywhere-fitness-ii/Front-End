import axios from "axios";

export const axiosWithAuth = () => {
  //get token from localstorage
  const token = window.localStorage.getItem("token");
  //create a new instance of axios witht he config object built into it
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: `https://anywhere-fitness-backend1.herokuapp.com`
  });
};
