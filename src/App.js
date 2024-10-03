import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import List from './Pages/List/List'
import Hotel from './Pages/Hotel/Hotel'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'


const App=()=> {
  return (
    <div>
     <Router>
      
     
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotel' element={<List/>}></Route>
        <Route path='/hotel/:id' element={<Hotel/>}></Route>

      </Routes>
     </Router>
    </div>
  )
}

export default App