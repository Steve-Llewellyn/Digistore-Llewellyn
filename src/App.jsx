import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings="Welcome to DigiCards"/>
      
    </div>
  )
}

export default App
