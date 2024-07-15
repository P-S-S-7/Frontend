import { Login } from "./components/Login"
import { Profile } from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700">
      <h1 className="text-3xl font-bold mb-4">Context API and State Management</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>

  )
}

export default App
