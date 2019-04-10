import axios from 'axios'

export const topics=()=>{
  return {
    getList:(params)=>{
      return axios.get('https://cnodejs.org/api/v1/topics',{
        params:params
      })
    },
    getTopic:(ID)=>{
      return axios.get(`https://cnodejs.org/api/v1/topic/${ID}`,{
        params:{
          mdrender:true,
          accesstoken:'5be8eca9e161dc409d760a93',
        }
      })
    },
    login:(data)=>{
      return axios.post('https://cnodejs.org/api/v1/accesstoken',{
        ...data
      })
    },
    createItem:(data)=>{
      return axios.post('https://cnodejs.org/api/v1/topics',{
        ...data
      })
    }
  }
}
