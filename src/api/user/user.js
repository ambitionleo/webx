import service from '@/utils/fatch'

export const userLogin = (info) => service.post('/users/fit',{info});