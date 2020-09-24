import React from 'react'
import TablePage from '../../pages/TablePage'

export class TableDataProvider extends React.Component {
  fetchUrl = {
    small: `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
    large: `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  }

  constructor(props) {
    super(props)
    this.state = {
      fetchUrl: props.match.params.size === 'large' ? this.fetchUrl.large : this.fetchUrl.small,
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch(this.state.fetchUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const {error, isLoaded, data} = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else {
      return (
        <TablePage isLoaded={isLoaded} data={data}/>
      )
    }
  }
}
