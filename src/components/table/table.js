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
    filteredData: '',
    search: false,
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
      data: sortType === 'asc' ? orderedData : orderedData.reverse(),
      sortDirection: sortType,
      sortField: field,
    })
  }

  selectionHandler = (row) => {
    this.setState({
      selectionRow: row,
    })
  }

  searchHandler = (search) => {
    if (search) {
      this.setState({
        search: true,
        filteredData: this.getFilteredData(this.state.data, search),
      })
    } else {
      this.setState({
        search: false,
        filteredData: '',
      })
    }
  }

  getFilteredData(data, search) {
    return data.filter((item) => {
      return (
        item['first_name'].toLowerCase().includes(search.toLowerCase()) ||
        item['last_name'].toLowerCase().includes(search.toLowerCase()) ||
        item['email'].toLowerCase().includes(search.toLowerCase()) ||
        item['phone'].toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  render() {
    return (
      <div className="table-responsive">
        <TableSearch searchHandler={this.searchHandler} />
        <table className="table table-hover">
          <TableHead
            headers={this.state.headers}
            sortHandler={this.sortHandler}
            sortDirection={this.state.sortDirection}
            sortField={this.state.sortField}
          />
          <TableBody
            data={this.state.search ? this.state.filteredData : this.state.data}
            selectionHandler={this.selectionHandler}
          />
        </table>
      </div>
    )
  }
}

export default Table
