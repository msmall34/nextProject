import { withRouter } from 'next/router'
import Layout from '../components/layout'

const Post = withRouter((props) => {
  return (
    <div>
      <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is dynamic content</p>
      </Layout>
    </div>
  )
})

export default Post;
