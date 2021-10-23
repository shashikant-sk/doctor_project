import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import HeadNav from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './style.css'

function App() {
  return (
    <>
      <Router>
        <HeadNav />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
