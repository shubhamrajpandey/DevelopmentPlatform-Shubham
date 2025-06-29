import React from 'react'

export default function axios() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.data)
    .catch(error=>console.log(error)
    )
  return (
    <div>
      data.map((users)=> {
        <li key={users.id}>{users.name}</li>})
    </div>
  )
}
