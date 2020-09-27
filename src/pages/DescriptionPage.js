import React from 'react'
import AboutAlert from '../components/AboutAlert/AboutAlert'
import ShowMarkdown from '../components/ShowMarkdown/ShowMarkdown'

const DescriptionPage = props => {
  const repoUrl = 'https://github.com/SunBro-Marko/fugr-ru-react-test'
  const readmePath = 'https://raw.githubusercontent.com/fugr-ru/frontend-javascript-test/master/README.md'

  return (
    <div class="container my-1">
      <AboutAlert repoUrl={repoUrl}/>
      <ShowMarkdown markdownUrl={readmePath}/>
    </div>
  )
}

export default DescriptionPage

