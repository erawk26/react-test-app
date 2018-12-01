import Link from "next/link";

// class Home extends React.Component{
//   render(){
//     return (
// <div>
//   <h1>Heeeey!</h1>
//   <ul>
//     <li><small>dude</small></li>
//     <li><em>bro</em></li>
//     <li><strong>brosef</strong></li>
//   </ul>
// </div>
// );
//   }
// }
const Home = props => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <strong>
          <h3>Heeeey!</h3>
        </strong>
      </li>
      <li>
        <small>dude</small>
      </li>
      <li>
        <em>bro</em>
      </li>
      <li>
        <strong>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
        </strong>
      </li>
    </ul>
  </div>
);

export default Home;
