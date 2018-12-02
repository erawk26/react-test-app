import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled from "styled-components";
const StyledPage = styled.div`
  color: black;
  background: white;
  ul{list-style:none;display: block;padding-left:0}
`;
const InnerDiv = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem;
`;
class Page extends Component {
  render() {
    return (
      <StyledPage>
        <InnerDiv>
          <Meta />
          <Header />
          {this.props.children}
        </InnerDiv>
      </StyledPage>
    );
  }
}
export default Page;
