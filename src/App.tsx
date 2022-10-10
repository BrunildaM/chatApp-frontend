import { useState, useEffect, useCallback } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { useStore } from 'zustand'
import './App.css'
import { Chat } from './Pages/Chat'
import {  useUserStore } from './Pages/Components/ZUSTAND/store'
import { User } from './Pages/Components/ZUSTAND/Types'
import { SignIn } from './Pages/SignIn'
import { SignOut } from './Pages/SignOut'

export const port = 4444;
export const API = `http://localhost:${port}`;

function App() {

  const Detail = () => {
    const params = useParams();
    const userId  = Number(params.userId); 
   

    const user = useUserStore(
      useCallback((state:any) => state.users.find((user: User) => user.id === userId), 
      [userId])
    );
    const users = useUserStore((state:any) => state.users);
  const addUser = useUserStore((state:any) => state.addUser);
  const removeUser = useUserStore((state:any) => state.removeUser);
  const updateUser = useUserStore((state:any) => state.updateUser);

    }

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
