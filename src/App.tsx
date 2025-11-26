import { BrowserRouter, Route, Routes } from "react-router"
import DashboardContainer from "./pages/dashboard/DashboardContainer"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
