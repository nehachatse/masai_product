import axios from 'axios';

export const loginUser = (payload) => {
    return axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', payload)
}

export const getProducts = (page=1, sort='', filter='') => {
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=6`
    if(sort)
      URL += `&sort=price&order=${sort}` 
    if(filter)
      URL += `&filter=${filter}`
    
      return axios.get(URL)
}