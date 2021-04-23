import logo from './logo.svg';
import './App.css';
 import {BrowserRouter,Route} from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import LogOut from './Components/LogOut';
import AboutUs from './Components/AboutUs';
import AddToCart from './Components/AddToCart';
function App() {
  return (
    <div className="App">

<Home/>
<SignUp/>
<AddToCart/>
<AboutUs/>

<BrowserRouter> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">                    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="SignUp">SignUp</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="AboutUs">AboutUs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="AddToCart">AddToCart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="LogOut">LogOut</a>
      </li>
    </ul>
  </div>
</nav>
<Route path="/" component={Home}/>
<Route path="/SignUpt" component={SignUp}/>
<Route path="/AddToCart" component={AddToCart}/>
<Route path="/LogOut" component={LogOut}/>

</BrowserRouter> 























</div>
);
 } 


export default App;
 