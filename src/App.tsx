
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { DetailPage } from './pages/DetailPage'
import { LoginPage } from './pages/LoginPage'
import { NavBar } from './components/NavBar'


const Layout = () => {
  return(
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/detail' element={<DetailPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
