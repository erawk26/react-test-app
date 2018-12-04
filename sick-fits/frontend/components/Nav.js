import { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeComplete = () => {
  // console.log("onRouteChangeComplete Triggered");
  NProgress.done();
};
Router.onRouteChangeStart = () => {
  // console.log("onRouteChangeStart Triggered");
  NProgress.start();
};
Router.onRouteChangeError = () => {
  // console.log("onRouteChangeError Triggered");
  NProgress.done();
};
class Nav extends Component {
  render() {
    return (
      <div className={`menu ${this.props.styleName}`}>
        <Link href="/">
          <a className="link">Home</a>
        </Link>

        <Link href="/sell">
          <a className="link flex aic jcc">Sell</a>
        </Link>
      </div>
    );
  }
}

export default Nav;
