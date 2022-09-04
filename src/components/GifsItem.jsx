import React from 'react'

export const GifsItem = ({title,url}) => {
    
    
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}


