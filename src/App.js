import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Signin from "./Pages/Signin";
import Makeup from "./Pages/Makeup";
import Skincare from "./Pages/Skincare";
import BeautyTips from "./Pages/BeautyTips";
import Tutorials from "./Pages/Tutorials";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Lipsticks from "./Pages/Lipsticks";
import EyeMakeup from "./Pages/EyeMakeup";
import Foundation from "./Pages/Foundation";
import BlushBronzer from "./Pages/BlushBronzer";
import Highlighter from "./Pages/Highlighter";
import MakeupBrushes from "./Pages/MakeupBrushes";
import Cleansers from "./Pages/Cleansers";
import Moisturizers from "./Pages/Moisturizers";
import Sunscreen from "./Pages/Sunscreen";
import Serums from "./Pages/Serums";
import FaceMasks from "./Pages/FaceMasks";
import EyeCare from "./Pages/EyeCare";
import DailySkincareRoutine from "./Pages/DailySkincareRoutine";
import MakeupApplicationTips from "./Pages/MakeupApplicationTips";
import LipCare from "./Pages/LipCare";
import EyeMakeupTricks from "./Pages/EyeMakeupTricks";
import NaturalGlow from "./Pages/NaturalGlow";
import RemoveMakeupProperly from "./Pages/RemoveMakeupProperly";
import TermsConditions from "./Pages/TermsConditions";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Cart from "./Pages/Cart";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/beauty-tips" element={<BeautyTips />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lipsticks" element={<Lipsticks />} />
          <Route path="/eye-makeup" element={<EyeMakeup />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/blush-bronzer" element={<BlushBronzer />} />
          <Route path="/highlighter" element={<Highlighter />} />
          <Route path="/makeup-brushes" element={<MakeupBrushes />} />
          <Route path="/cleansers" element={<Cleansers />} />
          <Route path="/moisturizers" element={<Moisturizers />} />
          <Route path="/sunscreen" element={<Sunscreen />} />
          <Route path="/serums" element={<Serums />} />
          <Route path="/face-masks" element={<FaceMasks />} />
          <Route path="/eye-care" element={<EyeCare />} />
          <Route path="/daily-skincare-routine" element={<DailySkincareRoutine />} />
          <Route path="/makeup-application-tips" element={<MakeupApplicationTips />} />
          <Route path="/lip-care" element={<LipCare />} />
          <Route path="/eye-makeup-tricks" element={<EyeMakeupTricks />} />
          <Route path="/natural-glow" element={<NaturalGlow />} />
          <Route path="/remove-makeup-properly" element={<RemoveMakeupProperly />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
