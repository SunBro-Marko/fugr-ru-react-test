import React from 'react'

const TablePage = props => {
  const {isLoaded, data} = props


  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1>Table</h1>
        {JSON.stringify(data)}
      </>
    )
  }
}

export default TablePage
