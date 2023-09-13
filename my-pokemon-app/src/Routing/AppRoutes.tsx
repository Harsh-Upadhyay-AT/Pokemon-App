import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes