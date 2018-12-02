import Nav from "../components/Nav";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0;
  .bar {
    flex: 1;
  }
  .main-nav {
    a {
      display: block;
      padding: 0.25em;
    }
  }
  .sub-bar {
    flex: 0;
  }
  > *,
  .main-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Nav styleName="main-nav" />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div className="cart">Cart</div>
  </StyledHeader>
);
export default Header;
