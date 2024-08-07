import { Helmet } from "react-helmet-async"


function DocumentTitle({children}) {
  return (
    <Helmet>
        <title>{children}</title>
    </Helmet>
  )
}

export default DocumentTitle