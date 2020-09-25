import React from 'react'
import Table from '../components/table/table'

const TablePage = props => {
  const {isLoaded, data} = props


  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>        
        <Table data={data}/>
      </>
    )
  }
}

export default TablePage
