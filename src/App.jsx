import './App.css'
import Routing from './Components/Routing/Routing'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <>
  <AuthProvider>
      <Routing />
      <h1>LOL</h1>
    </AuthProvider>   
     </>
  )
}

export default App
