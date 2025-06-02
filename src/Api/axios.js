import axios from "axios";
const axiosInstance = axios.create({

  // local instance of firebase function
  // baseURL: 'http://127.0.0.1:5001/clone-1dfe7/us-central1/api',
  // deploy version of amazon in render.com
  baseURL: 'https://amazon-api-deploy-l7c1.onrender.com'
})
export {axiosInstance}