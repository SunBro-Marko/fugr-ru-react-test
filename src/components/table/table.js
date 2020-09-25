import React from 'react'
import TableSearch from './tableSearch'
import TableHead from './tableHead'
import TableBody from './tableBody'

//import classes from "./template.module.scss"

class Table extends React.Component {
  state = {
    isDataSelected: false,
    isLoading: false,
    isShowForm: false,
    data: this.props.data,
    search: '',
    sortDirection: 'asc',
    sortField: 'id',
    selectionRow: null,
    currentPage: 0,
    headers: ['id', 'first_name', 'last_name', 'email', 'phone'],
  }

  sortHandler = (field) => {
    const clonedData = this.state.data.concat()

    const sortType = this.state.sortDirection === 'asc' ? 'desc' : 'asc'

    const orderedData = clonedData.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1
      }
      if (a[field] < b[field]) {
        return -1
      }
      return 0
    })

    this.setState({
      data:
        sortType === 'asc'
          ? orderedData
          : orderedData.reverse(),
      sortDirection: sortType,
      sortField: field,
    })
  }

  render() {
    return (
      <div className="table-responsive">
        <TableSearch />
        <table className="table table-hover">
          <TableHead
            headers={this.state.headers}
            sortHandler={this.sortHandler}
            sortDirection={this.state.sortDirection}
            sortField={this.state.sortField}
          />
          <TableBody data={this.state.data} />
        </table>
      </div>
    )
  }
}

export default Table
