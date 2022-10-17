
import { Navigate, Route, Routes, useParams } from 'react-router-dom'

import './App.css'
import { Chat } from './Pages/Chat'
import { Homepage } from './Pages/Homepage'
import { SignIn } from './Pages/SignIn'
import { SignOut } from './Pages/SignOut'


function App() {
  return (
    <div className="App">
     <Routes>
        {/* <Route index element={<Navigate to="/sign_in" />} /> */}
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_out" element={<SignOut />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
