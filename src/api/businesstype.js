/**
 * “业务类型”相关接口
 */
import request from '@/utils/request'

export default {
  queryBusinessType(queryParam,pageParam) {
    return request({
      url: '/businessType/list',
      method: 'post',
      data: {
        ...queryParam,
      current: pageParam.current,
      size: pageParam.size
      }
    })
    },
  getBusinessType(){
    return request({
      url: '/businessType/getBusinessType',
      method: 'post'
    })
  },
  update(data){
    return request({
      url: '/businessType/update',
      method: 'patch',
      data
    })
  },

  delete(data){
    return request({
      url: '/businessType/delete',
      method: 'patch',
      data
    })
  },
  create(data){
  return request({
    url: '/businessType/create',
    method: 'patch',
    data
  })
  },
  findById(data){
  var name
    request({
      url: '/businessType/findById',
      method: 'patch',
      data
    }).then(res=>{
        name = res.data.data;
      })
  return name;
}


}
