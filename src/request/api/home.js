import service from "..";
//获取首页轮播图的数据
export function password_Login(username, password){
  return service({
    method:"Post",
    url:"/user/password_login.do",
    data: {
      mobile: username,
      password: password,
    }
  })
}