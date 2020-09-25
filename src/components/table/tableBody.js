import React from "react";

class TableBody extends React.Component {
  render() {
    const usersList = this.props.data.map((user) => (
        <tr key={user.id} onClick={this.props.selectionHandler.bind(null, user)}>
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