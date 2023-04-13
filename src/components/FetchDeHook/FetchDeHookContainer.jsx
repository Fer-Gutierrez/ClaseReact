import React from 'react'
import useFetch from '../../utils/hooks/UseFetch'
import FetchDeHook from './FetchDeHook'

const FetchDeHookContainer = () => {

  const {data} = useFetch("https://jsonplaceholder.typicode.com/users",[])
  console.log(data)
    
  return (
    <div>
      <FetchDeHook data={data} />
    </div>
  )
}

export default FetchDeHookContainer
