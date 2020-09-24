import React from "react";
import TableSearch from "./tableSearch";

//import classes from "./template.module.scss"

class Table extends React.Component {
  

  render() {
    const headers = ["id", "firstName", "lastName", "email", "phone"];

    const headerList = headers.map((header) => (
      <th onClick={this.props.sortHandler.bind(null, header)}>
        {header}{" "}
        {this.props.sortField === header ? <small>{this.props.sortDirection}</small> : ""}
      </th>
    ));

    const usersList = this.props.users.map((user) => (
      <tr key={user.id + user.firstName}>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ));

    return (
      <div className="table-responsive">
        <TableSearch />
        <table className="table table-hover">
          <thead>
            <tr>{headerList}</tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
