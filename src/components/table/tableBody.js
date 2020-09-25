import React from "react";

class TableBody extends React.Component {
  render() {
    const usersList = this.props.data.map((user) => (
        <tr key={user.id + user.firstName}>
          <th scope="row">{user.id}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ));
    return <tbody>{usersList}</tbody>;
  }
}
export default TableBody;