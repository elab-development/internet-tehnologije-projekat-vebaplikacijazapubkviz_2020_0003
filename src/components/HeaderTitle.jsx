import React from 'react'

const HeaderTitle = ({title,text}) => {
  return (
    <div>
      <div className="header-title m-2">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
    </div>
  )
}

export default HeaderTitle
