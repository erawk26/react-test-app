import Nav from "../components/Nav";

const Header = () => (
  <div>
    <div className="bar">
      <Nav className="main-nav"/>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div className="cart">Cart</div>
  </div>
);
export default Header;
