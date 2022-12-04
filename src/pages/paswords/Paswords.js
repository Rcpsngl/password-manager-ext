import Card from '../../components/Card/Card_'
import React from 'react'
import data from '../../data.json'
function Pasword() {
  return (
    <div>
        {
          data.map((item,i) => (
            <Card item={item} key={i} />
          ))
        }
    </div>
  )
}

export default Pasword