'use client'
import useApiCalc from "../../../backend/src/api/useApiCalc"
import { useEffect, useState } from "react"

const Calculator = () => {

  const { data: apiData, api } = useApiCalc()
  const [data, setData] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData( prev => ({...prev, [name]: value}))
  } 

  const submitApi = (data) => {
    api('https://localhost:3000/calculator', data) 
  } 

    return(<>   
      <div class="calcbox bg-white text-black no-underline"> 
        <div class="pb-2 mb-2">
          <label className="block">Original Price</label>
          <input name='total_amount' class="w-40 border-2" type="number" onChange={(e)=> handleChange(e)} /> 
        </div>
        <div class="pb-2 mb-2">
          <label className="block">Discount %</label>
          <input name='discounted_amount' class="w-40 border-2" type="number" onChange={(e)=> handleChange(e)} />
        </div>
        
        <div class="pb-2 mb-2">
          <label className="block">Discount Type</label>
          <label>
          <input name='discount_type' type="radio" value='percentage' onChange={(e)=> handleChange(e)} /> percentage</label>
          <br/>
          <label><input name='discount_type' type="radio" value='fixed' onChange={(e)=> handleChange(e)} /> fixed </label>
        </div>
        <div class="pb-2 mb-2">
          <button class="rounded-full p-2 border-2" onClick={(e) => submitApi(data) }>Calculator</button>
        </div>
        { apiData ?
        <div class="pb-2 mb-2">
          <label className="block">Final Price:</label>
          <div> {apiData}</div>
        </div> : null }
      </div>
    </>)
}

export default Calculator