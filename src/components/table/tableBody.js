import React from "react";

class TableBody extends React.Component {

    Hightlight = (item,filter) => {      
        const str = String(item)
        if (!filter) return str         
        const regexp = new RegExp(filter, 'ig')
        const matchValue = str.match(regexp)
        if (matchValue) {
          return str.split(regexp).map((s, index, array) => {
            if (index < array.length - 1) {
              const c = matchValue.shift()
              return <>{s}<span className={'bg-warning'}>{c}</span></>
            }
            return s
          })
        }
        return str
      }
   
    
  render() {

    const usersList = this.props.data.map((user) => (
        <tr key={user.id} onClick={this.props.selectionHandler.bind(null, user)}>
          <th scope="row">{this.Hightlight(user.id,this.props.searchFilter)}</th>
          <td>{this.Hightlight(user.first_name,this.props.searchFilter)}</td>
          <td>{this.Hightlight(user.last_name,this.props.searchFilter)}</td>
          <td>{this.Hightlight(user.email,this.props.searchFilter)}</td>
          <td>{this.Hightlight(user.phone,this.props.searchFilter)}</td>
        </tr>
      ));
    return <tbody>{usersList}</tbody>;
  }
}
export default TableBody;