import { Component } from "react";
import Link from "next/link";

class Nav extends Component {
  render() {
    return (
      <div className={`menu ${this.props.styleName}`}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    );
  }
}

export default Nav;