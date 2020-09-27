import React from 'react'

const UserInfo = (props) => {
  const {user} = props

  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">

      <p>Выбран пользователь&nbsp;
        <b>{user.firstName}&nbsp;{user.lastName}</b>
      </p>
      <div className="form-group row">
        <label htmlFor="description" className="col-sm-2 col-form-label">Описание:</label>
        <div className="col-sm-10">
          <textarea className="form-control" id="description" disabled value={user.description}/>
        </div>
      </div>

      <p>Адрес проживания: <b>{user.address.streetAddress}</b></p>
      <p>Город: <b>{user.address.city}</b></p>
      <p>Провинция/штат: <b>{user.address.state}</b></p>
      <p>Индекс: <b>{user.address.zip}</b></p>

      {/*<button type="button" className="close" data-dismiss="alert">*/}
      {/*  <span>&times;</span>*/}
      {/*</button>*/}
    </div>
  )
}
export default UserInfo
