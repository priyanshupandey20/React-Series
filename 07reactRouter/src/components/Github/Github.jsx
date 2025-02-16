import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
 
    useEffect(() => {
        fetch('https://api.github.com/users/priyanshupandey20')
        .then(response => response.json())
        .then(data =>{
            console.log(data.followers)
            setData(data)
        })

    },[])


  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" className='rounded-full h-[150px] w-[150px]' />
    </div>
  )
}

export default Github
