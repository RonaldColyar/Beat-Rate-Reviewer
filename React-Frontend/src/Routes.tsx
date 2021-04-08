import {BrowserRouter as Router,Route} from "react-router-dom";
import DesktopHome from "../src/Screens/DesktopHome";
import Mobilehome from "../src/Screens/Mobilehome";
export var loggedInRoutes= 
    <Router>

        <Route exact path = "/">
            {window.screen.width > 800? DesktopHome : Mobilehome }
            
        </Route>

    </Router>

export var loggedOutRoutes = 
    <Router>

        <Route>
            
        </Route>
    </Router>