import service from "..";
//获取指定类型类型新闻列表
export function getNews(type, page){
  return service({
    method:"post",
    url:"/getNews/getType.do",
    data: {
      type:type,
      page:page
    },
  })
}
//获取新闻详情
export function getNewsDetail(newsId){
  return service({
    method:"post",
    url:"/admin/getNew.do",
    data: {
      newsId:newsId
    },
  })
}