import axios from "axios";
let service=axios.create({
  baseURL:"http://47.120.33.23:8087/",
  timeout:3000
})
export default service
