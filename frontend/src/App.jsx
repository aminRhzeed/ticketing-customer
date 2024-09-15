import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<Home />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
        <ToastContainer />
    </>
  )
}

export default App
