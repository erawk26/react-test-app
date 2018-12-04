import React, { Component } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  white: "#fff",
  maxWidth: "1080px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const InnerDiv = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem 2rem;
  h1 {
    margin-top: 0;
  }
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <InnerDiv>{this.props.children}</InnerDiv>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
export default Page;



















injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
  ul {
    list-style: none;
    display: block;
    padding-left: 0;
  }
  .flex {
    display: flex;
    &.jcfs {
      justify-content: flex-start;
    }
    &.jcfe {
      justify-content: flex-end;
    }
    &.jcsb {
      justify-content: space-between;
    }
    &.jcsa {
      justify-content: space-around;
    }
    &.jcc {
      justify-content: center;
    }
    &.aic {
      align-items: center;
    }
    &.aib {
      align-items: baseline;
    }
    &.ais {
      align-items: stretch;
    }
    &.aifs {
      align-items: flex-start;
    }
    &.aife {
      align-items: flex-end;
    }
    .grow-1 {
      flex: 1;
    }
    .grow-0 {
      flex: 0;
    }
  }
  .container {
    margin: 0 auto;
    &.mw {
      max-width: ${theme.maxWidth};
    }
    &.pad {
      padding: 2rem;
    }
  }
  .link {
    color: ${theme.black};
    text-decoration: none;
    padding: 0.25em;
  }
`;