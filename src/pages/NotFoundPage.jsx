import React from 'react'
import DocumentTitle from '../DocumentTitle'
import NotFound from '../components/NotFound/NotFound'

function NotFoundPage() {
  return (
    <div>
      <DocumentTitle>Whoops!</DocumentTitle>
      <NotFound />
    </div>
  )
}

export default NotFoundPage