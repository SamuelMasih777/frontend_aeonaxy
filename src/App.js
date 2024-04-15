import { Fragment } from 'react';
import './App.css';
// import {SignUp} from './pages/signup/SignUp';
// import Routes,Route
import { Routes,Route } from 'react-router-dom';
// import { AvatarSignUp } from './pages/signup/Avatar-SignUp';
// import { InfoSignUp } from './pages/signup/Info-SignUp';
// import { EmailVerify } from './pages/signup/EmailVerify-SignUp';
import { SignupForm } from './pages/signup/SignUpForm';
import { Home } from './pages/home-page/HomePage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/signup' element={<SignupForm/>} /> 
        {/* <Route path='/avatarsignup' element={<AvatarSignUp/>} />
        <Route path='/infosignup' element={<InfoSignUp/>} />
        <Route path='/emailverify' element={<EmailVerify/>} /> */}
      </Routes>
      {/* <SignUp/> */}
    </Fragment>
  );
}

export default App;
