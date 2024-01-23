import './App.css';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/auth/signin' element={<SignInPage/>}/>
          <Route exact path='/auth/signup' element={<SignUpPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
