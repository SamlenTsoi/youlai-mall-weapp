
import request from '@/utils/request'

export function getAdvertList() {
  return request({
    url: '/mall-sms/adverts',
    method: 'get'
  })
}
