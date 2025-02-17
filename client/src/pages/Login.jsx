import React, { useContext } from 'react'
import { Button, Typography } from '@mui/material'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const auth = getAuth()
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider)

  }

  if(user?.uid)
  {
    navigate('/')
  }
  return (
    <>
      <Typography variant='h5'>Welcome to note app</Typography>

      <Button variant='outlined' sx={{ marginBottom: '10px' }} onClick={handleLoginWithGoogle}>
        Login with google
      </Button>
    </>
  )
}
