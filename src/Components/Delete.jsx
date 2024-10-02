import React from 'react'

const Delete = ( {handleDelete} ) => {
  return (
    <div onClick={handleDelete}  className='bg-red-500 w-full h-10 rounded-md  text-center mt-4 py-2 text-white cursor-pointer hover:bg-red-800' >
      Delete Account
    </div>
  )
}

export default Delete
