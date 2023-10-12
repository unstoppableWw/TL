import axios from "axios";
let service=axios.create({
  baseURL:"http://10.191.78.7:8087/",
  timeout:3000
})
export default service