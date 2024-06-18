import { Flex, Spinner, Text } from '@chakra-ui/react'
import { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  LocalStorageSessionKeys,
  useSessionStore,
} from '../stores/sessionStore'
import { Home } from './Home'
import { Login } from './Login'
import { MicroFrontendTwoPage } from './MicroFrontendTwoPage'
import { NavBar } from './NavBar'
import { NotFound } from './NotFound'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRoot: FunctionComponent = (): ReactElement => {
  const sessionStore = useSessionStore()
  const [appInitialised, setAppInitialised] = useState<boolean>(false)

  function initaliseApp(): void {
    if (!sessionStore.token && localStorage.getItem(LocalStorageSessionKeys.userSessionToken)) {
      sessionStore.setToken(
        localStorage.getItem(LocalStorageSessionKeys.userSessionToken) as string
      )
    }

    setAppInitialised(true)
  }

  useEffect(() => {
    initaliseApp()
  }, [])

  return (
    <BrowserRouter>
      {appInitialised ? (
        <Flex flexDir={"column"} minHeight={"100vh"} bg={"gray.300"}>
          {(sessionStore.token ? true : false) && <NavBar />}

          <Flex flexDir={"column"} flexGrow={1} p={8}>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                <Route
                  path="microfrontend2/*"
                  element={<MicroFrontendTwoPage />}
                />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Spinner />
          <Text>Loading...</Text>
        </Flex>
      )}
    </BrowserRouter>
  )
}
