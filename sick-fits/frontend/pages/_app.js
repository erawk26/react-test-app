import App, {Container} from 'next/app';
class myApp extends App {
  render(){
    const {Component} = this.props;
  return (
 <Container>
   {/* <p className="ss">Hey I'm on every page.</p> */}
   <Component/>
  </Container>
  );
  }
}
export default myApp;