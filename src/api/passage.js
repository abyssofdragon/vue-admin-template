import request from './request'
export async function getPassage(page = 1, limit = 10, categoryid = -1) {
  return await request.get('api/passage', {
    params: {
      page,
      limit,
      categoryid
    }
  })
}

export async function getPassageTypes() {
  return await request.get('api/passageType')
}
// 获取单个文章
export async function getBlog(id) {
  return await request.get(`api/passage/${id}`)
}

// 提交评论
export async function postComment(commentInfo) {
  return await request.get('api/comment', commentInfo)
}
// 分页获取评论
export async function getComment(passageId, page = 1, limit = 10) {
  return await request.get('api/comment', {
    params: {
      passageId,
      page,
      limit
    }
  })
}

