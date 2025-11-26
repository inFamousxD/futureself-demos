import { Routes, Route } from "react-router"
import NavContainer from "../../components/Nav/NavContainer"
import MeditationContainer from "../meditation/MeditationContainer"
import { DashboardStyled, DashboardContent } from "./Dashboard.styles"
import Dashboard from "./Dashboard"

const DashboardContainer = () => {
    return (
        <DashboardStyled>
            <NavContainer />
            <DashboardContent>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/meditation" element={<MeditationContainer />} />
                </Routes>
            </DashboardContent>
        </DashboardStyled>
    )
}

export default DashboardContainer