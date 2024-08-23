import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import PrivatRoute from "./components/PrivatRoute";
import CreateListing from "./pages/CreateListing";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivatRoute />}> 
        <Route path="/profile" element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing />} />

        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
