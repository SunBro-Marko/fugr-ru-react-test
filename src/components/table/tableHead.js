import React from "react";

class TableHead extends React.Component {
  render() {
    const headerList = this.props.headers.map((header) => (
      <th onClick={this.props.sortHandler.bind(null, header)}>
        {header}{" "}
        {this.props.sortField === header ? (
          <small>{this.props.sortDirection}</small>
        ) : (
          ""
        )}
      </th>
    ));

    return <thead>{headerList}</thead>;
  }
}
export default TableHead;
