import React, { useState, useEffect } from 'react'
import AppContainer from './app/navigator/navigation'
import SplashScreen from './app/screens/splashScreen'

export default function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => setloading(false), 2000)
  }, [])

  if (loading) {
    return <SplashScreen />
  }
  return <AppContainer />
}



