import { Route, Routes } from "react-router-dom"
// import NavBar1 from "./components/NavBar1"
import LandingPage from "./pages/LandingPage"
import SearchPODPage from "./pages/SearchPODPage"
import TodayPODPage from "./pages/TodayPODPage"
import WeekPODPage from "./pages/WeekPODPage"
import NavBar2 from "./components/NavBar2"
import PODPage from "./pages/PODPage"

function App() {

  return (
    <div className=''>
      <NavBar2/>
      <Routes>
        <Route index element = {<LandingPage/>} />
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/pods-of-the-week' element = {<WeekPODPage/>} />
        <Route path='/todays-pod' element = {<TodayPODPage/>} />
        <Route path='/find-a-pod' element = {<SearchPODPage/>} />
        <Route path='/pod/:date' element = {<PODPage/>} />
      </Routes>
    </div>
  )
}

export default App
