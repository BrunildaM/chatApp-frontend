import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './Pages/Chat'
import { SignIn } from './Pages/SignIn'
import { SignOut } from './Pages/SignOut'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/sign_in" />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_out" element={<SignOut />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
