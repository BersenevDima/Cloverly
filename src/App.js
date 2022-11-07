import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Environment/Environment';
import About from './pages/Product/Product';
import Recipe from './pages/Connect/Connect';
import Order from './pages/World/World';
import Meals from "./components/Meals/Meals";
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Meals/>
      <Switch>
        <Route exact path="/" exact component={Home}/>
        <Route exact path="/about" exact component={About}/>
        <Route exact path="/recipe" exact component={Recipe}/>
        <Route exact path="/order-now" exact component={Order}/>
      </Switch>
    </Router>
  );
}

export default App;
