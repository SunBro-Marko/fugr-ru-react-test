import React from "react";

class TableBody extends React.Component {
  render() {
    const usersList = this.props.data.map((user) => (
        <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ));
    return <tbody>{usersList}</tbody>;
  }
}
export default TableBody;