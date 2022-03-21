import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar/index";
import Banner from "./components/pages/banner";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Academy from "./components/pages/academy";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Banner />
      <Header />
      <Switch>
        <Route path='/home'  component={Banner} />
        <Route path='/about' component={About} />
        <Route path='/academy' component={Academy} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;