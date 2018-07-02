/**
 * “业务类型”相关接口
 */
import request from '@/utils/request'

export default {
  queryBusinessOrder(queryParam,pageParam) {
    return request({
      url: '/businessOrder/list',
      method: 'post',
      data: {
        ...queryParam,
      current: pageParam.current,
      size: pageParam.size
      }
    })
    },

  update(data){
    return request({
      url: '/businessOrder/update',
      method: 'patch',
      data
    })
  },

  delete(data){
    return request({
      url: '/businessOrder/delete',
      method: 'patch',
      data
    })
  },
  create(data){
  return request({
    url: '/businessOrder/create',
    method: 'patch',
    data
  })
},
consumeStatistics(){
  return request({
    url: '/businessOrder/consumeStatistics',
    method: 'patch'
  })
}

}
