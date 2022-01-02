import { Route } from 'react-router-dom';
import './css/style.css';

import Footer from './common/Footer';
import Header from './common/Header';

import Home from './sub/Home';
import About from './sub/About';
import Youtube from './sub/Youtube';
import Gallery from './sub/Gallery';
import Community from './sub/Community';
import Contact from './sub/Contact';
import Join from './sub/Join';


function App() {
  return (
    <>
      <Header></Header>
      <Route exact path={['/portfolio-work/', '/']} component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/join" component={Join}></Route>
      <Footer></Footer>
    </>
  );
}

export default App;
