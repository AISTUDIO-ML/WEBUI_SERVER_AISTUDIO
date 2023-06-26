// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react"

// ** Next Import
import { useRouter } from "next/router"

// ** Axios
import axios from "axios"

// ** Config
import authConfig from "src/configs/auth"

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from "./types"
import React from "react"

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const safeRef = React.useRef<boolean>(false)

  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  const initAuth = React.useCallback(async (): Promise<void> => {
    const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
    console.log({ storedToken })
    if (storedToken) {
      setLoading(true)
      await axios
        .get(authConfig.meEndpoint, {
          headers: {
            Authorization: storedToken
          }
        })
        .then(async response => {
          setLoading(false)
          console.log(response.data)
          setUser({ ...response.data.userData })
        })
        .catch(() => {
          localStorage.removeItem("userData")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("accessToken")
          setUser(null)
          setLoading(false)
          if (authConfig.onTokenExpiration === "logout" && !router.pathname.includes("login")) {
            router.replace("/login")
          }
        })
    } else {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    safeRef.current = true
    if (safeRef.current) {
      void initAuth()
    }

    return () => {
      safeRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = React.useCallback(
    async (params: LoginParams, errorCallback?: ErrCallbackType) => {
      console.log({ params })
      try {
        const persist = params.rememberMe
        const response = await axios({
          url: authConfig.loginEndpoint,
          method: "post",
          data: params
        })

        // Store Access Token
        if (persist) {
          window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
        }
        const returnUrl = router.query.returnUrl
        setUser({ ...response.data.userData })

        // Store User Data
        if (persist) {
          window.localStorage.setItem("userData", JSON.stringify(response.data.userData))
        }
        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/"
        router.replace(redirectURL as string).catch(err => {
          if (errorCallback) errorCallback(err)
        })
      } catch (error) {
        console.log(error)
      }
    },
    [router]
  )

  const handleLogout = React.useCallback(() => {
    setUser(null)
    window.localStorage.removeItem("userData")
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push("/login")
  }, [router])

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: React.useMemo(() => handleLogin, [handleLogin]),
    logout: React.useMemo(() => handleLogout, [handleLogout])
  }

  // console.log("context values", { values })

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
