import { useState } from 'react'
import { postRequest } from './apiCommon'

const useApiCalc = () => {

  const [data, setData] = useState('')
  const api = async (url, data, cbf = () => {}) => {
  
    setData('Please wait...')
    try {
      let res = await postRequest(url, data)
      if (res.success) {
        setData(res)
        cbf()
        return
      }
    } catch(err) {
      console.log(err?.message);
    }
  }
  return { data, api }

}

export default useApiCalc;