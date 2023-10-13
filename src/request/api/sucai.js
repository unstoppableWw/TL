import service from "..";
//获取题库列表
export function getMatrial(region, materialType, page,keyword){
  return service({
    method:"post",
    url:"/material/getMatrial.do",
    data: {
      region: region,
      materialType: materialType,
      page: 1,
      keyword: keyword,
    },
    headers: {
      token: localStorage.getItem("token")
    }
  })
}
//获取素材详情
export function materialDetail(id){
  return service({
    method:"post",
    url:"/admin/materialDetail.do",
    data: {
      id: id,
    },
    headers: {
      token: localStorage.getItem("token")
    }
  })
}