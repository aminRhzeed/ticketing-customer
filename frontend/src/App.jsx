import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Header from './component/Header.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <>
        <Router>
            <div className=''>
                <Header />
                <div className='container mx-auto'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    </>
  )
}

export default App
