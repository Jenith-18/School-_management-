import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import AdmissionForm from './pages/AdmissionForm';
import Campus from './pages/Campus';
import Explore from './pages/Explore';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/about" element={<><Navbar /> <About /></>} />
        <Route path="/academics" element={<><Navbar /> <Academics /></>} />
        <Route path="/admissions" element={<><Navbar /><Admissions /></>} />
        <Route path="/admissionForm" element={<><Navbar /><AdmissionForm /></>}/>
        <Route path="/campus" element={<><Navbar /><Campus /></>} />
        <Route path="/explore" element={<><Navbar />< Explore/></>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
