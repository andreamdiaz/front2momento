import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContatPage from "./pages/ContactPage";
import RoomsPage from "./pages/RoomsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RoomDetailsPage from "./pages/RoomDetailsPage";




function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={ <HomePage/> } />
        <Route  path="/About" element={ <AboutPage/> } />
        <Route  path="/Rooms" element={ <RoomsPage/> } />
        <Route  path="/Rooms/:id" element={ <RoomDetailsPage/> } />
        <Route  path="/Contact" element={ <ContatPage/> } />
        <Route  path="*" element={ <NotFoundPage/> } />
      </Routes>
    </>
  )
}

export default App
