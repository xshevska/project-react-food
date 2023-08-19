import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {NotFound} from "./pages/NotFound"
import {Movie} from "./pages/Movie"

function App() {
    return <>
        <Router>
            <Header/>
            <main className = "container content">

                <Switch>
                    {/*exact path*/}
                    <Route exact path = "/">
                        <Home/>
                    </Route>

                    <Route path = "/about" component = {About}/>
                    <Route path = "/contacts" component = {Contact}/>
                    <Route path = "/movies/:title" component = {Movie}/>
                    <Route component = {NotFound}/>
                </Switch>

            </main>
            <Footer/>
        </Router>
    </>;
}

export default App;
