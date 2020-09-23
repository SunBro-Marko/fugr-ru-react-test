import React from 'react'
import {Link} from 'react-router-dom'

const StartPage = props => {
  return (
    <div class="container my-5">
      <div class="col mx-auto">
        <h2 class="text-center">Select the data size to load the table:</h2>
      </div>
      <div class="col-12 col-md-8 col-lg-6 mx-auto">

        <Link to="/table/small" className="btn btn-info btn-lg btn-block">Small amount of data</Link>
        <Link to="/table/large" className="btn btn-warning btn-lg btn-block">Large amount of data</Link>

        <ul class="mt-4">
          <p>This project is made as a test task, link to the test task and github project below:</p>
          <li>
            <a href="https://github.com/fugr-ru/frontend-javascript-test"><strong>Test task description</strong></a>
          </li>
          <li>
            <a href="https://github.com/SunBro-Marko/fugr-ru-react-test"><strong>Project Github
              page</strong></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StartPage
