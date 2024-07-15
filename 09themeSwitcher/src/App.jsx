// Code: App.jsx

import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./context/themeContext"
import { ThemeButton } from "./components/ThemeButton";
import { Card } from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');

    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);


  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-12">Theme Switcher</h1>
      <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* Theme Btn */}
                    <ThemeButton />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    {/* Card */}
                    <Card />
                </div>
            </div>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
