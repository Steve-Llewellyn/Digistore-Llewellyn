import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path= "/" element={<ItemListContainer greetings="Welcome to DigiCards"/>} />
        <Route path= "/category/:idCategory" element={<ItemListContainer greetings="Welcome to DigiCards"/>} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<div> Error 404</div>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
