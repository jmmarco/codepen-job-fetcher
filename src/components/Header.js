import React from 'react'

export default function Header(props) {
  const { remote } = props
  console.log('remote:', remote)
  return (
    <header>
      <h1>
        CodePen <span className={remote ? '' : 'not-remote'}>
        Remote</span> Jobs Fetcher
      </h1>
    </header>
  )
}