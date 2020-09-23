import React from 'react'

const TablePage = props => {
  const dataSize = props.match.params.id


  return (
    <>
      <h1>Table: {dataSize}</h1>
          {JSON.stringify(props)}

    </>
  )
}

export default TablePage
