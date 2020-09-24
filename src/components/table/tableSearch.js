import React from "react"
//import classes from "./template.module.scss"

const TableSearch = (props) => {

  return (
    <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Для поиска введите любую информацию о пользователе..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
    </div>
  )
}

export default TableSearch