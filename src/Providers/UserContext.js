import React, { useContext, useState } from 'react'

const UserContext = React.createContext()
const UpdateUserContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}

export function useUpdateUser() {
  return useContext(UpdateUserContext)
}

export function UserProvider({ children }) {
  const [user, setUser] = useState([])

  const updateUser = () => {
    fetch('http://localhost:4000/api/v1/favorites?api_key=guest_api_key')
      .then(response => response.json())
      .then(data => {
        setUser(
          data.data.map((ele, i) => ({id:ele.id, ...ele.attributes}))
        )
      })
  }

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={updateUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}
