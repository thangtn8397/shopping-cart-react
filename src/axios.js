import axios from "axios";
const intance = axios.create({
  baseURL: "https://ecommerce-31a69.firebaseio.com/",
});
export default intance;
