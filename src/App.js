import "./App.scss";
import HomePage from "./pages/HomePage";
import CardDetails from "./pages/CardDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:id">
            <CardDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
