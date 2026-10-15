import React, { useEffect } from 'react'
import { useAuthContext } from '../context/AuthProvider'
import useApi from '../../../config/axiosInstance'

const ProfilePage = () => {

  const authContext = useAuthContext()
  const api = useApi()

  async function fetchProfile() {
    const res = await api.get('/auth/me')

    authContext.setUser(res.data.data.user)
  }

  useEffect(() => {
    fetchProfile();
  },[])

  return (
    <main>
      <h1>Profile</h1>
      <p>Name: {authContext.user?.name}</p>
      <p>Email: {authContext.user?.email}</p>
    </main>
  )
}

export default ProfilePage