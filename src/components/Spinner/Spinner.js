import React from 'react'
import { useSelector } from 'react-redux'
import { PulseLoader } from 'react-spinners'

export default function Spinner() {
  let {isLoading} = useSelector((state) => state.spinReducer);
  return isLoading ? (
    <div className='h-screen w-screen bg-black fixed z-10
     flex justify-center items-center'>
        <PulseLoader size={50} speedMultiplier={1} loading={true} color="#36d7b7" />
    </div>
  ) : (
    <></>
  )
}
