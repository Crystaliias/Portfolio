import React from "react";
import Navbar from "./components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AngelicAnguish from "./pages/AngelicAnguish";
import TheMagicalGuardianExperience from "./pages/TheMagicalGuardianExperience";
import TheInsuranceGame from "./pages/TheInsuranceGame";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Portfolio" element={<Home />} />
                <Route path="/AngelicAnguish" element={<AngelicAnguish />} />
                <Route path="/TheMagicalGuardianExperience" element={<TheMagicalGuardianExperience />} />
                <Route path="/TheInsuranceGame" element={<TheInsuranceGame />} />
            </Routes>
        </Router>
    );
}
 
export default App;