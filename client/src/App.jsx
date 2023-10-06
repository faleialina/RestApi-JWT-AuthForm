import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegPage from "./pages/RegPage/RegPage"



function App() {


  return (
    <Routes>
      <Route path="/reg" element={<RegPage />}></Route>
      <Route path="/home" element={< HomePage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  )
}

export default App
