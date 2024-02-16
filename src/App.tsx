import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Meetup } from './pages/Meetup'
import { Login } from './pages/Login'




function App() {

  return (
    <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''} siteName='meetup.nxweb.co.in' url='http://49.13.30.235:8080'>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/meetup" element={<Meetup />} />
          
         

        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  )
}

export default App