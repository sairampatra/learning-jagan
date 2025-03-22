import './App.css'
import Routing from './Components/Routing/Routing'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <>
  <AuthProvider>
      <Routing />
    </AuthProvider>   
     </>
  )
}

export default App
