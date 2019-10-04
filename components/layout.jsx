import Nav from './nav'

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout;
