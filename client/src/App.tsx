import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from "./pages/LandingPage"
import SearchPODPage from "./pages/SearchPODPage"
import TodayPODPage from "./pages/TodayPODPage"
import WeekPODPage from "./pages/WeekPODPage"

function App() {

  return (
    <div className='app'>
      <NavBar/>
        <Routes>
          <Route index element = {<LandingPage/>} />
          <Route path='/home' element = {<LandingPage/>} />
          <Route path='/pods-of-the-week' element = {<WeekPODPage/>} />
          <Route path='/todays-pod' element = {<TodayPODPage/>} />
          <Route path='/find-a-pod' element = {<SearchPODPage/>} />
        </Routes>
    </div>
  )
}

export default App
