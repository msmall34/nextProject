import Layout from '../components/layout'
import Link from 'next/link'

function Home() {
  return (
    <div>
      <Layout>
      <br/><br/><br/>
        <Post id="next-js" title="Hello NextJS"></Post>
        <Post id="react-js" title="Hello reactJS"></Post>
        <Post id="my-channel" title="Please connect and subscribes to my channel"></Post>
      </Layout>
    </div>
  )
}

function Post (props) {
  return (
    <div>
      <Link as={` /p/${props.id} `} href={` /post?title=${props.title} `}>
        <a>{props.title}</a>
      </Link>
    </div>
  )
}

export default Home;
