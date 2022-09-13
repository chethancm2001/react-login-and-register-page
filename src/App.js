import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Tostmsg from './components/Tostmsg';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/roast' element={<Tostmsg />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
