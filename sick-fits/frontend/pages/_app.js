import App, {Container} from 'next/app';
import Page from "../components/Page";

class myApp extends App {
  render(){
    const {Component} = this.props;
  return (
 <Container>
   {/* <p className="ss">Hey I'm on every page.</p> */}
      <Page>
        <Component />
      </Page>
  </Container>
  );
  }
}
export default myApp;
