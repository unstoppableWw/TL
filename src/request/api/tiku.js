import service from "..";
//获取题库列表
export function getBooks(bookType, bookArea,page){
  return service({
    method:"post",
    url:"/getBooks",
    data: {
      bookType: bookType,
      bookArea: bookArea,
      page: page
    },
    headers: {
      token: localStorage.getItem("token")
    }
  })
}
//获取习题详情
export function getBookDetail(bookId){
  return service({
    method:"post",
    url:"/getBooks/bookDetail.do",
    data: {
      bookId:bookId,
    },
    headers: {
      token: localStorage.getItem("token")
    }
  })
}
//获取答案详情详情
export function getAnsDetail(bookId){
  return service({
    method:"post",
    url:"/getBook/answer.do",
    data: {
      bookId:bookId,
    },
    headers: {
      token: localStorage.getItem("token")
    }
  })
}