import AppRoutes from './AppRoutes'
import UserContextProvider from './context/userContext'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
function App() {
  return (
    <>
      <UserContextProvider>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </UserContextProvider>
    </>
  )
}

export default App
