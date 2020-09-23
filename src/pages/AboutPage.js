import React from 'react'

const AboutPage = props => {
  return (
    <div class="container my-5">
      <div class="col mx-auto">
        <h2 class="text-center">Copy here readme.md:</h2>
      </div>
      <div class="col-12 col-md-8 col-lg-6 mx-auto">
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

export default AboutPage
