import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegPage from "../pages/RegPage/RegPage"


function RoutesProvaider(isAuth) {
    if (isAuth) {
        return <Routes>
            <Route path="/home" element={<HomePage />}></Route>
        </Routes>
    } else {
        return <Routes>
            <Route path="/reg" element={<RegPage />}></Route>
            <Route path="/" element={<LoginPage />}></Route>
        </Routes>
    }

}
export default RoutesProvaider;