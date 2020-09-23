import React from "react"
//import classes from "./template.module.scss"

const Table = (props) => {
  const headers = ["ID", "firstName", "lastname", "email", "phone"]

  const headerList = headers.map((header) => <th>{header}</th>)

  

  const usersList = props.users.map((user) => (
      <tr>
          <th scope="row">{user.id}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
      </tr>
  ))

  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>{headerList}</tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </div>
  )
}

export default Table
