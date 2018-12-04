import React, { Component } from 'react';
import Nav from "../components/Nav";
import styled from "styled-components";
const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0;
  .bar {
  }
  .logo {
    font-size: 3em;
  }
  .main-nav {
  }
  .sub-bar {
  }
  > *,
  .main-nav {
  }
`;
class Header extends Component {
  render() {
    return <StyledHeader>
        <div className="container flex ais mw pad">
          <div className="bar flex grow-1">
          <div className="logo"> 💩 </div>
            <Nav styleName="main-nav flex jcfs aic" />
          </div>
        <div className="sub-bar flex aic grow-0">
            <span className="link flex aic">Search</span>
          </div>
          <div className="cart link  flex aic grow-0">Cart</div>
        </div>
      </StyledHeader>;
  }
}

export default Header;
